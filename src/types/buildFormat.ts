export interface Resources {
  gold: number;
  stone: number;
  food: number;
  wood: number;
  build: number;
}

export interface Building {
  type: string;
  count: number;
}

interface BaseBuildStep {
  resources: Resources;
  optional?: boolean;
}

export interface NewVillagersStep extends BaseBuildStep {
  type: "newVillagers";
  task: string;
  count: number;
  buildings?: Building[];
}

export interface MoveVillagersStep extends BaseBuildStep {
  type: "moveVillagers";
  from: string;
  to: string;
  count: number;
  buildings?: Building[];
}

export interface LureStep extends BaseBuildStep {
  type: "lure";
  animal: string;
  count: number;
  method?: "push" | "villagers";
}

export interface ResearchStep extends BaseBuildStep {
  type: "research";
  tech: string[];
}

export interface AgeUpStep extends BaseBuildStep {
  type: "ageUp";
  age: string;
}

export interface NewAgeStep extends BaseBuildStep {
  type: "newAge";
  age: string;
}

export interface BuildStep extends BaseBuildStep {
  type: "build";
  buildings: Building[];
}

export interface CustomStep extends BaseBuildStep {
  type: "custom";
  text: string;
}

export interface TradeStep extends BaseBuildStep {
  type: "trade";
  action: "sell" | "buy";
  resource: string;
  count: number;
}

export interface TrainUnitStep extends BaseBuildStep {
  type: "trainUnit";
  unit: string;
  count: string | number;
}

export interface CollectGoldStep extends BaseBuildStep {
  type: "collectGold";
  task: string;
  count: number;
}

export interface DecisionStep extends BaseBuildStep {
  type: "decision";
  text: string;
}

export type BuildOrderStep =
  | NewVillagersStep
  | MoveVillagersStep
  | LureStep
  | ResearchStep
  | AgeUpStep
  | NewAgeStep
  | BuildStep
  | CustomStep
  | TradeStep
  | TrainUnitStep
  | CollectGoldStep
  | DecisionStep;

export interface NewBuildFormat {
  build: BuildOrderStep[];
}
