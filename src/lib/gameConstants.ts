import gameConstants from "@/data/gameConstants.json";
import { toTitleCaseLabel } from "@/lib/text";

export interface GameConstant {
  value: string;
  label: string;
}

export interface GameConstants {
  technologies: GameConstant[];
  buildings: GameConstant[];
  units: GameConstant[];
  resources: GameConstant[];
  ages: GameConstant[];
  tasks: GameConstant[];
  tradeActions: GameConstant[];
  animals: GameConstant[];
}

const rawGameConstants = gameConstants as GameConstants;

const sortByLabel = (items: GameConstant[] = []): GameConstant[] =>
  [...items].sort((a, b) => a.label.localeCompare(b.label));

const normalizeItems = (items: GameConstant[] = []): GameConstant[] =>
  items.map((item) => ({
    ...item,
    label: toTitleCaseLabel(item.label || ""),
  }));

export const GAME_CONSTANTS: GameConstants = {
  ...rawGameConstants,
  technologies: sortByLabel(normalizeItems(rawGameConstants.technologies)),
  buildings: sortByLabel(normalizeItems(rawGameConstants.buildings)),
  units: sortByLabel(normalizeItems(rawGameConstants.units)),
  resources: sortByLabel(normalizeItems(rawGameConstants.resources)),
  ages: sortByLabel(normalizeItems(rawGameConstants.ages)),
  tasks: sortByLabel(normalizeItems(rawGameConstants.tasks)),
  tradeActions: sortByLabel(normalizeItems(rawGameConstants.tradeActions)),
  animals: sortByLabel(normalizeItems(rawGameConstants.animals)),
};

// Utility functions to get labels by value
export function getTechnologyLabel(value: string): string {
  const tech = GAME_CONSTANTS.technologies.find(t => t.value === value);
  return tech ? tech.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getBuildingLabel(value: string): string {
  const building = GAME_CONSTANTS.buildings.find(b => b.value === value);
  return building ? building.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getUnitLabel(value: string): string {
  const unit = GAME_CONSTANTS.units.find(u => u.value === value);
  return unit ? unit.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getResourceLabel(value: string): string {
  const resource = GAME_CONSTANTS.resources.find(r => r.value === value);
  return resource ? resource.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getAgeLabel(value: string): string {
  const age = GAME_CONSTANTS.ages.find(a => a.value === value);
  return age ? age.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getTaskLabel(value: string): string {
  const task = GAME_CONSTANTS.tasks.find(t => t.value === value);
  return task ? task.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getTradeActionLabel(value: string): string {
  const action = GAME_CONSTANTS.tradeActions.find(a => a.value === value);
  return action ? action.label : value.charAt(0).toUpperCase() + value.slice(1);
}

export function getAnimalLabel(value: string): string {
  const animal = GAME_CONSTANTS.animals.find(a => a.value === value);
  return animal ? animal.label : value.charAt(0).toUpperCase() + value.slice(1);
}

// Generic function to get any label by category and value
export function getGameConstantLabel(category: keyof GameConstants, value: string): string {
  const item = GAME_CONSTANTS[category].find((item: GameConstant) => item.value === value);
  return item ? item.label : value.charAt(0).toUpperCase() + value.slice(1);
}
