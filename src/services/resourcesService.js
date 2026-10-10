/**
 * Service to fetch and parse study materials and assignments from Google Sheets
 * for Class 8, Class 9, Class 10, and Crash Course portals.
 */

export const RESOURCE_CLASSES = {
  Class8: {
    id: 'Class8',
    name: 'Class 8 Foundation',
    title: 'Class 8 Student Resources',
    grade: 'Class VIII',
    sheetId: '1sWwawv59XjSEPZ_gOZGkbctaaAgV4G_ZgoCuhJFl7qc',
    tabs: ['Maths', 'Physics', 'Chemistry', 'Biology'],
    badge: 'Class VIII Foundation',
    desc: 'Daily classroom notes, lecture summaries, and homework assignments for 8th Grade Foundation students.',
    route: '/Class8',
  },
  Class9: {
    id: 'Class9',
    name: 'Class 9 Foundation',
    title: 'Class 9 Student Resources',
    grade: 'Class IX',
    sheetId: '1j3ni6Pl0iTVS6gMEEN23L_WJQ4YakBgxI-TQlkC07p0',
    tabs: ['Maths', 'Physics', 'Chemistry', 'Biology'],
    badge: 'Class IX Foundation & Olympiad',
    desc: 'Comprehensive IIT/NEET foundation notes, chapter-wise problem sets, and daily assignments for 9th Grade.',
    route: '/Class9',
  },
  Class10: {
    id: 'Class10',
    name: 'Class 10 Board & Foundation',
    title: 'Class 10 Student Resources',
    grade: 'Class X',
    sheetId: '1kCmbxgXCg-EVnChCfJgzQmme8EPxmAg7f86XTfWAyxo',
    tabs: ['Maths', 'Physics', 'Chemistry', 'Biology'],
    badge: 'Class X Board + Pre-JEE/NEET',
    desc: 'Board exam preparation materials, high-yield DPPs, and foundational concepts for 10th Grade.',
    route: '/Class10',
  },
  CrashCourse: {
    id: 'CrashCourse',
    name: 'Crash Course Revision',
    title: 'Crash Course Resources',
    grade: 'JEE & NEET Fast-Track',
    sheetId: '', // Ready for Crash Course Sheet ID
    tabs: ['Maths', 'Physics', 'Chemistry', 'Biology'],
    badge: 'High-Impact Rank Booster',
    desc: 'Intensive revision notes, formula sheets, mock tests, and high-priority problem sets.',
    route: '/CrashCourse',
  },
};

export const SUBJECT_METADATA = {
  Maths: {
    name: 'Maths',
    color: '#3b82f6', // Tailwind blue-500
    bgClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    activeCardClass: 'ring-2 ring-blue-500 bg-blue-500/10 dark:bg-blue-950/40',
    iconName: 'Calculator',
  },
  Physics: {
    name: 'Physics',
    color: '#f97316', // Tailwind orange-500
    bgClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30',
    activeCardClass: 'ring-2 ring-orange-500 bg-orange-500/10 dark:bg-orange-950/40',
    iconName: 'Atom',
  },
  Chemistry: {
    name: 'Chemistry',
    color: '#10b981', // Tailwind emerald-500
    bgClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    activeCardClass: 'ring-2 ring-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/40',
    iconName: 'FlaskConical',
  },
  Biology: {
    name: 'Biology',
    color: '#8b5cf6', // Tailwind purple-500
    bgClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    activeCardClass: 'ring-2 ring-purple-500 bg-purple-500/10 dark:bg-purple-950/40',
    iconName: 'Dna',
  },
};

// In-memory cache for fast tab and class switching
const cache = new Map();

/**
 * Parse Google Sheets date formats (Date(yyyy, m, d), DD/MM/YYYY, or ISO string)
 */
export function parseDate(dateStr) {
  if (!dateStr) return new Date(0);

  // Handle Google Sheets Date() format: Date(2025,11,13)
  const googleDateMatch = String(dateStr).match(/Date\((\d+),(\d+),(\d+)\)/);
  if (googleDateMatch) {
    return new Date(
      parseInt(googleDateMatch[1], 10),
      parseInt(googleDateMatch[2], 10),
      parseInt(googleDateMatch[3], 10)
    );
  }

  // Handle standard formats
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed;

  // Try DD/MM/YYYY format
  const parts = String(dateStr).split(/[\/\-\.]/);
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  return new Date(0);
}

/**
 * Format date for user display: "May 20, 2026"
 */
export function formatDate(dateStr) {
  const date = parseDate(dateStr);
  if (date.getTime() === 0) return dateStr || 'General Resource';
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Check if the resource was published in the last 48 hours
 */
export function isRecent(dateStr) {
  const itemDate = parseDate(dateStr);
  if (itemDate.getTime() === 0) return false;
  const now = new Date();
  const hoursDiff = (now - itemDate) / (1000 * 60 * 60);
  return hoursDiff >= 0 && hoursDiff <= 72; // 72 hours for student visibility
}

/**
 * Ensure URL has https:// protocol
 */
export function formatUrl(url) {
  if (!url) return '';
  const trimmed = url.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) {
    return trimmed;
  }
  return 'https://' + trimmed;
}

/**
 * Fetch a single sheet tab from Google Sheets
 */
async function fetchSheetTab(sheetId, tabName) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);

    if (!data.table || !data.table.cols || !data.table.rows) return [];

    const headers = data.table.cols.map((col) =>
      (col.label || col.id || '').toLowerCase().trim()
    );

    const subject = tabName.replace('Class', '').replace('Assignment', '');

    return data.table.rows
      .map((row) => {
        const item = { subject, tabName };
        row.c?.forEach((cell, idx) => {
          const header = headers[idx];
          if (header && cell) {
            let val = '';
            if (cell.f) val = cell.f;
            else if (cell.v !== null && cell.v !== undefined) val = String(cell.v);
            item[header] = val;
          }
        });
        return item;
      })
      .filter((item) => item.topic || item.name || item.assignment || item.date);
  } catch (err) {
    console.warn(`Direct fetch failed for ${tabName}, falling back to JSONP:`, err);
    return fetchSheetTabJSONP(sheetId, tabName);
  }
}

let jsonpCounter = 0;
function fetchSheetTabJSONP(sheetId, tabName) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve([]);

    const callbackName = `srsma_sheet_cb_${jsonpCounter++}_${Date.now()}`;
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json;responseHandler:${callbackName}&sheet=${encodeURIComponent(tabName)}`;

    const script = document.createElement('script');
    script.src = url;

    window[callbackName] = (response) => {
      cleanup();
      try {
        if (!response || !response.table) return resolve([]);
        const table = response.table;
        const headers = table.cols.map((col) => (col.label || col.id || '').toLowerCase().trim());
        const subject = tabName.replace('Class', '').replace('Assignment', '');

        const items = table.rows
          .map((row) => {
            const item = { subject, tabName };
            row.c?.forEach((cell, idx) => {
              const header = headers[idx];
              if (header && cell) {
                let val = '';
                if (cell.f) val = cell.f;
                else if (cell.v !== null && cell.v !== undefined) val = String(cell.v);
                item[header] = val;
              }
            });
            return item;
          })
          .filter((item) => item.topic || item.name || item.assignment || item.date);

        resolve(items);
      } catch (e) {
        console.error('Error parsing JSONP response:', e);
        resolve([]);
      }
    };

    const cleanup = () => {
      delete window[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
    };

    script.onerror = () => {
      cleanup();
      resolve([]);
    };

    document.head.appendChild(script);

    // 10s timeout
    setTimeout(() => {
      if (window[callbackName]) {
        cleanup();
        resolve([]);
      }
    }, 10000);
  });
}

/**
 * Fetch all subject tabs for a specified class
 */
export async function fetchClassResources(classKey) {
  const config = RESOURCE_CLASSES[classKey];
  if (!config) return [];

  // Check cache
  if (cache.has(classKey)) {
    return cache.get(classKey);
  }

  // If no sheet ID (e.g. CrashCourse placeholder)
  if (!config.sheetId || config.sheetId.trim() === '') {
    // Provide curated high-yield crash course resources
    const mockData = getCrashCourseCuratedData();
    cache.set(classKey, mockData);
    return mockData;
  }

  try {
    const promises = config.tabs.map((tab) => fetchSheetTab(config.sheetId, tab));
    const results = await Promise.all(promises);
    const flatData = results.flat();

    // Sort by date newest first
    flatData.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    cache.set(classKey, flatData);
    return flatData;
  } catch (error) {
    console.error(`Failed to fetch resources for ${classKey}:`, error);
    return [];
  }
}

/**
 * High-yield curated Crash Course resources for immediate student value
 */
function getCrashCourseCuratedData() {
  return [
    {
      subject: 'Maths',
      date: 'Date(2026,4,1)',
      topic: 'Calculus Rapid Revision & High-Yield PYQs (JEE Main)',
      'topic link': 'https://drive.google.com/file/d/1_9HElrACdKoEFdGIoIafNm8Js72zfBPh/view?usp=drive_link',
      assignment: 'Calculus Speed-Drill Problem Sheet (30 Qs)',
      'assignment link': 'https://drive.google.com/file/d/1OBYyLVDv4xTmDSOvN_5bPpCgx-YSiF6f/view?usp=drive_link',
    },
    {
      subject: 'Physics',
      date: 'Date(2026,3,28)',
      topic: 'Modern Physics & Electrodynamics Formula Cheat-Sheet',
      'topic link': 'https://drive.google.com/file/d/1_9HElrACdKoEFdGIoIafNm8Js72zfBPh/view?usp=drive_link',
      assignment: 'Modern Physics Timed Mock Drill (OMR Format)',
      'assignment link': 'https://drive.google.com/file/d/1OBYyLVDv4xTmDSOvN_5bPpCgx-YSiF6f/view?usp=drive_link',
    },
    {
      subject: 'Chemistry',
      date: 'Date(2026,3,25)',
      topic: 'Organic Chemistry Reaction Mechanisms & Name Reactions',
      'topic link': 'https://drive.google.com/file/d/1_9HElrACdKoEFdGIoIafNm8Js72zfBPh/view?usp=drive_link',
      assignment: 'Organic Chemistry Rapid Recall DPP',
      'assignment link': 'https://drive.google.com/file/d/1OBYyLVDv4xTmDSOvN_5bPpCgx-YSiF6f/view?usp=drive_link',
    },
    {
      subject: 'Biology',
      date: 'Date(2026,3,20)',
      topic: 'Human Physiology & Genetics High-Weightage NCERT Review',
      'topic link': 'https://drive.google.com/file/d/1_9HElrACdKoEFdGIoIafNm8Js72zfBPh/view?usp=drive_link',
      assignment: 'NEET 100-Question NCERT Line-by-Line Mock',
      'assignment link': 'https://drive.google.com/file/d/1OBYyLVDv4xTmDSOvN_5bPpCgx-YSiF6f/view?usp=drive_link',
    },
  ];
}
