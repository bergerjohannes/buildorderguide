export const AVAILABLE_ATTRIBUTES = [
  "drush",
  "fastFeudal",
  "fastCastle",
  "fastImperial",
  "water",
  "meme",
  "arena",
];

// Translation mapping for camelCase attribute values
const ATTRIBUTE_VALUE_MAP: Record<string, string> = {
  drush: "drush",
  fastfeudal: "fastFeudal",
  fastcastle: "fastCastle",
  fastimperial: "fastImperial",
  water: "water",
  waterhybrid: "water",
  meme: "meme",
  arena: "arena",
};

function toReadableLabel(attribute: string): string {
  return attribute
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(^|\s)([a-z])/g, (match) => match.toUpperCase());
}

function normalizeAttributeValue(attribute: string): string | null {
  if (!attribute) return null;
  if (AVAILABLE_ATTRIBUTES.includes(attribute)) {
    return attribute;
  }
  const sanitized = attribute.toLowerCase().replace(/[^a-z]/g, "");
  return ATTRIBUTE_VALUE_MAP[sanitized] || null;
}

/**
 * Translates an attribute value to its readable display text.
 * Handles both camelCase values and current display-ready labels.
 */
export function translateAttribute(attribute: string): string {
  const normalized = normalizeAttributeValue(attribute);
  if (normalized) {
    return toReadableLabel(normalized);
  }
  return toReadableLabel(attribute);
}

/**
 * Translates an array of attribute values to readable display text.
 * Filters out unsupported attributes.
 */
export function translateAttributes(attributes: string[]): string[] {
  if (!attributes || !Array.isArray(attributes)) return [];
  
  return attributes
    .filter(attr => attr && typeof attr === 'string')
    .map(translateAttribute)
    .filter(translatedAttr => translatedAttr !== '');
}

export function getAttributeOptions() {
  return AVAILABLE_ATTRIBUTES.map((attr) => ({
    value: attr,
    label: toReadableLabel(attr),
  }));
}

export function getAttributeDropdownOptions() {
  return [
    { value: "All", label: "All" },
    ...AVAILABLE_ATTRIBUTES.map((attr) => ({
      value: attr,
      label: toReadableLabel(attr),
    })),
  ];
}
