import { BuildOrderStep, Resources } from "@/types/buildFormat";
import { toTitleCaseLabel } from "@/lib/text";

export interface ParsedStepInfo {
  action: string;
  resource?: string;
  amount?: number;
  condition?: string;
  building?: string;
  unit?: string;
  details?: string;
}

function convertCamelCaseToReadable(camelCaseString: string): string {
  // Insert spaces before capital letters and numbers
  const readable = camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase -> camel Case
    .replace(/([a-zA-Z])(\d)/g, '$1 $2') // letter followed by number -> letter number  
    .replace(/(\d)([a-zA-Z])/g, '$1 $2'); // number followed by letter -> number letter

  // Split into words and apply smart capitalization
  const words = readable.split(/\s+/);
  const capitalizedWords = words.map((word, index) => 
    smartCapitalize(word, index === 0)
  );

  return capitalizedWords.join(' ');
}

const SPECIAL_TASK_LABELS: Record<string, string> = {
  foodundertc: "Food Under TC",
};

export function convertTaskToReadableText(taskString: string): string {
  const normalizedTask = taskString.trim().toLowerCase();

  if (SPECIAL_TASK_LABELS[normalizedTask]) {
    return SPECIAL_TASK_LABELS[normalizedTask];
  }

  const readable = convertCamelCaseToReadable(taskString);
  return toTitleCaseLabel(readable);
}

export function parseCamelCaseStep(stepName: string): ParsedStepInfo {
  const info: ParsedStepInfo = {
    action: stepName
  };

  // Extract numbers (amounts, counts)
  const numberMatch = stepName.match(/(\d+)/);
  if (numberMatch) {
    info.amount = parseInt(numberMatch[1]);
  }

  // Extract resource names
  const resourcePatterns = ['gold', 'food', 'wood', 'stone'];
  for (const resource of resourcePatterns) {
    if (stepName.toLowerCase().includes(resource)) {
      info.resource = resource;
      break;
    }
  }

  // Extract building names
  const buildingPatterns = [
    'barracks', 'range', 'archeryrange', 'stable', 'market', 'blacksmith',
    'mill', 'lumbercamp', 'miningcamp', 'dock', 'monastery', 'university',
    'castle', 'towncenter', 'house', 'farm', 'wall', 'gate', 'tower'
  ];
  for (const building of buildingPatterns) {
    if (stepName.toLowerCase().includes(building)) {
      info.building = building;
      break;
    }
  }

  // Extract unit names
  const unitPatterns = [
    'villager', 'militia', 'archer', 'spearman', 'scout', 'knight',
    'crossbow', 'longsword', 'pikeman', 'cavalry', 'monk'
  ];
  for (const unit of unitPatterns) {
    if (stepName.toLowerCase().includes(unit)) {
      info.unit = unit;
      break;
    }
  }

  // Extract conditions (after/when/before/if)
  const conditionMatch = stepName.match(/after([A-Z][a-z]*)/i);
  if (conditionMatch) {
    info.condition = conditionMatch[1].toLowerCase();
  }

  // Determine action based on common patterns
  if (stepName.toLowerCase().includes('collect')) {
    info.action = 'collect';
  } else if (stepName.toLowerCase().includes('build')) {
    info.action = 'build';
  } else if (stepName.toLowerCase().includes('train')) {
    info.action = 'train';
  } else if (stepName.toLowerCase().includes('research')) {
    info.action = 'research';
  } else if (stepName.toLowerCase().includes('move')) {
    info.action = 'move';
  } else if (stepName.toLowerCase().includes('lure')) {
    info.action = 'lure';
  }

  return info;
}

export function createStepFromString(stepName: string, resources: Resources): BuildOrderStep {
  const parsed = parseCamelCaseStep(stepName);
  
  // Try to determine step type based on parsed information
  if (parsed.building && parsed.action === 'build') {
    return {
      type: "build",
      buildings: [{ type: parsed.building, count: parsed.amount || 1 }],
      resources
    };
  }
  
  if (parsed.unit && parsed.action === 'train') {
    return {
      type: "trainUnit",
      unit: parsed.unit,
      count: parsed.amount || 1,
      resources
    };
  }
  
  // Default to custom step for unrecognized patterns
  return {
    type: "custom",
    text: stepName.replace(/([A-Z])/g, ' $1').trim(),
    resources
  };
}

// Special game terms that should be capitalized
const SPECIAL_TERMS = {
  resources: ['gold', 'food', 'wood', 'stone', 'tree'],
  buildings: [
    'barracks', 'range', 'archeryrange', 'stable', 'market', 'blacksmith', 'mill',
    'lumbercamp', 'miningcamp', 'dock', 'monastery', 'university', 'castle',
    'towncenter', 'house', 'farm', 'wall', 'gate', 'tower', 'outpost', 'wonder',
    'feitoria', 'krepost', 'donjon'
  ],
  units: [
    'villager', 'militia', 'archer', 'spearman', 'scout', 'knight', 'crossbow',
    'longsword', 'pikeman', 'cavalry', 'monk', 'catapult', 'trebuchet', 'bombard',
    'cannon', 'galley', 'warship', 'transport'
  ],
  technologies: [
    'loom', 'wheelbarrow', 'handcart', 'horsecollar', 'heavyplow', 'croppotation',
    'doubleribtaxes', 'coinage', 'banking', 'guilds', 'forging', 'ironsting',
    'blastfurnace', 'scalemailarmor', 'chainmailarmor', 'platemailarmor',
    'fletching', 'boddkinpoint', 'bracer', 'paddedarcherarmor', 'leatherarcherarmor',
    'ringarcherarmor'
  ],
  ages: ['darkage', 'feudalage', 'castleage', 'imperialage']
};

function isSpecialTerm(word: string): boolean {
  const lowerWord = word.toLowerCase();
  return SPECIAL_TERMS.resources.includes(lowerWord) ||
         SPECIAL_TERMS.buildings.includes(lowerWord) ||
         SPECIAL_TERMS.units.includes(lowerWord) ||
         SPECIAL_TERMS.technologies.includes(lowerWord) ||
         SPECIAL_TERMS.ages.includes(lowerWord);
}

function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function smartCapitalize(word: string, isFirstWord: boolean = false): string {
  if (isFirstWord || isSpecialTerm(word)) {
    return capitalizeWord(word);
  }
  return word.toLowerCase();
}

function formatBuildingName(building: string): string {
  // Handle special building names
  const buildingMap: { [key: string]: string } = {
    'barracks': 'Barracks',
    'archeryrange': 'Archery Range', 
    'range': 'Archery Range',
    'stable': 'Stable',
    'market': 'Market',
    'blacksmith': 'Blacksmith',
    'mill': 'Mill',
    'lumbercamp': 'Lumber Camp',
    'miningcamp': 'Mining Camp',
    'dock': 'Dock',
    'monastery': 'Monastery',
    'university': 'University',
    'castle': 'Castle',
    'towncenter': 'Town Center',
    'house': 'House',
    'farm': 'Farm'
  };
  
  return buildingMap[building.toLowerCase()] || capitalizeWord(building);
}

export function formatStepDescription(step: BuildOrderStep): string {
  switch (step.type) {
    default:
      return '';
  }
}
