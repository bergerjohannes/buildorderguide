import { Build } from "@/types/build";
import { BuildOrderStep } from "@/types/buildFormat";

function getTotalVillagersFromResources(resources: { food: number; wood: number; gold: number; stone: number; build: number }): number {
  return resources.food + resources.wood + resources.gold + resources.stone + resources.build;
}

function findLastStepBeforeAgeUp(steps: BuildOrderStep[], targetAge: string): BuildOrderStep | null {
  let lastStepBeforeAgeUp: BuildOrderStep | null = null;

  for (const step of steps) {
    if (step.type === "ageUp" && step.age === targetAge) {
      break;
    }
    // Keep track of the last step that has villager allocations
    if (step.resources && getTotalVillagersFromResources(step.resources) > 0) {
      lastStepBeforeAgeUp = step;
    }
  }

  return lastStepBeforeAgeUp;
}

export function getFeudalVillagerCount(build: Build): string {
  if (!build.build || build.build.length === 0) {
    return "?";
  }

  const lastStep = findLastStepBeforeAgeUp(build.build, "feudalAge");
  if (!lastStep) {
    return "?";
  }

  const count = getTotalVillagersFromResources(lastStep.resources);
  return (count + 1).toString(); // +1 for the scout
}

export function hasAgeTransition(build: Build, age: string): boolean {
  if (!build.build) {
    return false;
  }

  return build.build.some(step => step.type === "ageUp" && step.age === age);
}

export function getVillagerDifference(
  build: Build,
  currentAge: "castle" | "imperial"
): string | null {
  if (!build.build) {
    return null;
  }
  
  // Check if the build actually reaches the requested age
  const targetAge = currentAge === "castle" ? "castleAge" : "imperialAge";
  if (!hasAgeTransition(build, targetAge)) {
    return null; // Don't show differences for ages not reached
  }
  
  let currentCount: number | null;
  let previousCount: number | null;
  
  if (currentAge === "castle") {
    // For castle, we need the count before castle age up
    const lastStepBeforeCastle = findLastStepBeforeAgeUp(build.build || [], "castleAge");
    currentCount = lastStepBeforeCastle ? getTotalVillagersFromResources(lastStepBeforeCastle.resources) : null;
    
    // Previous count is before feudal age up (without +1 scout for comparison)
    const lastStepBeforeFeudal = findLastStepBeforeAgeUp(build.build || [], "feudalAge");
    previousCount = lastStepBeforeFeudal ? getTotalVillagersFromResources(lastStepBeforeFeudal.resources) : null;
  } else {
    // Imperial age - only show if we also have castle age
    if (!hasAgeTransition(build, "castleAge")) {
      return null; // Can't show imperial difference without castle
    }
    
    const lastStepBeforeImperial = findLastStepBeforeAgeUp(build.build || [], "imperialAge");
    currentCount = lastStepBeforeImperial ? getTotalVillagersFromResources(lastStepBeforeImperial.resources) : null;
    
    const lastStepBeforeCastle = findLastStepBeforeAgeUp(build.build || [], "castleAge");
    previousCount = lastStepBeforeCastle ? getTotalVillagersFromResources(lastStepBeforeCastle.resources) : null;
  }
  
  if (currentCount !== null && previousCount !== null) {
    const diff = currentCount - previousCount;
    if (diff >= 0 && diff <= 5) {
      return `+${diff}`;
    }
    return null; // Don't show badge for large differences
  }
  
  return null;
}

// Legacy function compatibility - now only works with new format
export function calculateVillagerCount(
  _checkpoints: Build["checkpoints"],
  _targetType: string,
  _fallbackType: string
): number | null {
  return null; // Legacy format no longer supported
}