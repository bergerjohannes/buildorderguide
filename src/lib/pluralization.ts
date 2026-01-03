/**
 * Pluralization utility for Age of Empires II unit and building names
 */

const IRREGULAR_PLURALS: Record<string, string> = {
  // Units ending in -man
  Spearman: "Spearmen",
  Militiaman: "Militiamen",
  Longbowman: "Longbowmen",
  "Jian Swordsman": "Jian Swordsmen",
  "Urumi Swordsman": "Urumi Swordsmen",
  "Throwing Axeman": "Throwing Axemen",
  "Genoese Crossbowman": "Genoese Crossbowmen",

  // Compound units
  "Man-at-Arms": "Men-at-Arms",

  // Units that don't change in plural
  Militia: "Militia",

  // Buildings ending in -s (already plural-looking)
  Barracks: "Barracks",

  // Buildings with irregular plurals
  "Fortified Church": "Fortified Churches",

  // Buildings that are always plural or don't change
  Wall: "Walls",
  Gate: "Gates",
};

/**
 * Pluralize a unit or building name
 */
export function pluralize(name: string, count: number = 2): string {
  if (count === 1) {
    return name;
  }

  // Check for irregular plurals first
  if (name in IRREGULAR_PLURALS) {
    return IRREGULAR_PLURALS[name];
  }

  // Words ending in 's', 'x', 'z', 'ch', 'sh' typically add 'es'
  if (/[sxz]$|[cs]h$/.test(name)) {
    return `${name}es`;
  }

  // Words ending in consonant + 'y' change to 'ies'
  if (/[^aeiou]y$/i.test(name)) {
    return name.slice(0, -1) + "ies";
  }

  // Default: add 's'
  return `${name}s`;
}
