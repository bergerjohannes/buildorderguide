export type BuildStatusKey = "draft" | "changed" | "published";

const CHANGED_STATUS_STRINGS = new Set([
  "changed",
  "published (unpublished changes)",
  "published (unpublished changes)".toLowerCase(),
]);

export function normalizeBuildStatus(status?: string): BuildStatusKey {
  const normalized = (status || "").trim().toLowerCase();

  if (normalized === "draft") {
    return "draft";
  }

  if (CHANGED_STATUS_STRINGS.has(normalized)) {
    return "changed";
  }

  return "published";
}

export function getBuildStatusLabel(status?: string): string {
  const normalized = normalizeBuildStatus(status);

  switch (normalized) {
    case "draft":
      return "Draft";
    case "changed":
      return "Published (Changed)";
    default:
      return "Published";
  }
}
