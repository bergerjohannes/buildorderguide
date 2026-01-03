export function getCivImagePath(civName: string): string {
  return `/images/Civs/${civName.toLowerCase()}.png`;
}

export function getDifficultyImagePath(difficulty: string | number): string {
  const difficultyMap: { [key: string]: string } = {
    // Legacy string format
    Beginner: "/images/Medals/Bronze.png",
    Intermediate: "/images/Medals/Silver.png",
    Advanced: "/images/Medals/Gold.png",
    // New numbered format
    "1": "/images/Medals/Bronze.png",
    "2": "/images/Medals/Silver.png", 
    "3": "/images/Medals/Gold.png",
  };
  return difficultyMap[difficulty.toString()] || "/images/Medals/Bronze.png";
}

export function getDifficultyLabel(difficulty: string | number): string {
  const difficultyLabelMap: { [key: string]: string } = {
    // Legacy string format
    Beginner: "Beginner",
    Intermediate: "Intermediate",
    Advanced: "Advanced",
    // New numbered format
    "1": "Beginner",
    "2": "Intermediate",
    "3": "Advanced",
  };
  return difficultyLabelMap[difficulty.toString()] || "Beginner";
}

export function getAgeImagePath(age: string): string {
  const ageMap: { [key: string]: string } = {
    dark_age: "/images/Ages/dark_age_de.png",
    feudal_age: "/images/Ages/feudal_age_de.png",
    castle_age: "/images/Ages/castle_age_de.png",
    imperial_age: "/images/Ages/imperial_age_de.png",
  };
  return ageMap[age] || "/images/Ages/dark_age_de.png";
}

export function getResourceImagePath(resource: string): string {
  const resourceMap: { [key: string]: string } = {
    food: "/images/Res/Aoe2de_food.png",
    wood: "/images/Res/Aoe2de_wood.png",
    gold: "/images/Res/Aoe2de_gold.png",
    stone: "/images/Res/Aoe2de_stone.png",
    builders: "/images/Res/Aoe2de_builder.png",
    build: "/images/Res/Aoe2de_builder.png", // Map "build" to builder icon
    fishingShips: "/images/Res/Aoe2de_ship.png",
  };
  return resourceMap[resource] || "";
}