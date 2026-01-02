import { Timestamp } from "firebase/firestore";
import { BuildOrderStep } from "./buildFormat";

export interface ResourceNote {
  note: string;
}

export interface VillagerDistribution {
  food: number;
  wood: number;
  gold: number;
  stone: number;
  builders: number;
  fishingShips: number;
  foodNote?: string;
  woodNote?: string;
  goldNote?: string;
  stoneNote?: string;
  buildersNote?: string;
  fishingShipsNote?: string;
}

export interface Checkpoint {
  villagers: VillagerDistribution;
  genericNotes: string[];
  type?:
    | "dark_age"
    | "feudal_age"
    | "castle_age"
    | "imperial_age"
    | "dark_age_to_feudal_age"
    | "feudal_age_to_castle_age"
    | "castle_age_to_imperial_age";
}

export interface AlternativeCheckpointPath {
  decisionText?: string;
  checkpoints: Checkpoint[];
  commonCheckpoints?: Checkpoint[];
}

export interface Build {
  id: string;
  title: string;
  civilization: string;
  publisher: string;
  status: string;
  checkpoints?: Checkpoint[];
  build?: BuildOrderStep[];
  pop?: { [key: string]: number };
  uptime?: { [key: string]: string };
  difficulty?: string | number;
  attributes?: string[];
  imageURL?: string;
  description?: string;
  author?: string;
  source?: string;
  rating?: number; // Legacy field, kept for compatibility
  ratingCount?: number; // Legacy field, kept for compatibility
  avg_rating?: number; // Current field used by Firebase functions
  number_of_ratings?: number; // Current field used by Firebase functions
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

