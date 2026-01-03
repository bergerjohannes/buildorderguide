// Utility functions for authentication diagnostics

export function checkNetworkConnectivity(): Promise<boolean> {
  return new Promise((resolve) => {
    // If navigator.onLine is false, we're definitely offline
    if (!navigator.onLine) {
      resolve(false);
      return;
    }

    // Try to fetch a small resource to verify connectivity
    // Use a well-known URL that should always be available
    fetch("https://www.google.com/favicon.ico", {
      method: "HEAD",
      mode: "no-cors",
      cache: "no-cache",
    })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
}

export function checkBrowserStorageSupport(): {
  localStorage: boolean;
  indexedDB: boolean;
  sessionStorage: boolean;
} {
  const result = {
    localStorage: false,
    indexedDB: false,
    sessionStorage: false,
  };

  // Check localStorage
  try {
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    result.localStorage = true;
  } catch {
    result.localStorage = false;
  }

  // Check sessionStorage
  try {
    const testKey = "__session_test__";
    sessionStorage.setItem(testKey, "test");
    sessionStorage.removeItem(testKey);
    result.sessionStorage = true;
  } catch {
    result.sessionStorage = false;
  }

  // Check IndexedDB (used by Firebase for persistence)
  try {
    result.indexedDB = !!window.indexedDB;
  } catch {
    result.indexedDB = false;
  }

  return result;
}

export function checkFirebasePrerequisites(): {
  network: Promise<boolean>;
  storage: {
    localStorage: boolean;
    indexedDB: boolean;
    sessionStorage: boolean;
  };
  webWorkers: boolean;
  https: boolean;
} {
  return {
    network: checkNetworkConnectivity(),
    storage: checkBrowserStorageSupport(),
    webWorkers: typeof Worker !== "undefined",
    https:
      window.location.protocol === "https:" ||
      window.location.hostname === "localhost",
  };
}

export async function runAuthDiagnostics(): Promise<{
  network: boolean;
  storage: boolean;
  prerequisites: boolean;
  issues: string[];
}> {
  const issues: string[] = [];
  const prerequisites = checkFirebasePrerequisites();

  const networkStatus = await prerequisites.network;
  const storageStatus = prerequisites.storage;

  if (!networkStatus) {
    issues.push("No internet connection detected");
  }

  if (!storageStatus.localStorage) {
    issues.push("localStorage is not available (required for authentication)");
  }

  if (!storageStatus.indexedDB) {
    issues.push(
      "IndexedDB is not available (may affect offline functionality)"
    );
  }

  if (!prerequisites.webWorkers) {
    issues.push("Web Workers not supported (may affect performance)");
  }

  if (!prerequisites.https) {
    issues.push("HTTPS not detected (required for some Firebase features)");
  }

  return {
    network: networkStatus,
    storage: storageStatus.localStorage && storageStatus.indexedDB,
    prerequisites: issues.length === 0,
    issues,
  };
}
