import Image from "next/image";
import { Build } from "@/types/build";
import {
  getFeudalVillagerCount,
  getVillagerDifference,
} from "@/lib/villagerCalculator";

interface VillagerCountsProps {
  build: Build;
}

function VillagerCounts({ build }: VillagerCountsProps) {
  // Calculate all values upfront
  const feudalCount = getFeudalVillagerCount(build);
  
  const castleDifference = getVillagerDifference(build, "castle");
  const showCastle = castleDifference !== null;
  
  const imperialDifference = getVillagerDifference(build, "imperial");
  const showImperial = imperialDifference !== null;

  return (
    <div className="flex items-center flex-wrap gap-2 mb-2">
      {/* Feudal Age */}
      <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
        <Image
          src="/images/Ages/feudal_age_de.png"
          alt="Feudal Age Villagers"
          width={20}
          height={20}
        />
        <span className="text-sm font-medium text-foreground">
          {feudalCount}
        </span>
      </div>

      {/* Castle Age */}
      {showCastle && (
        <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
          <Image
            src="/images/Ages/castle_age_de.png"
            alt="Castle Age Additional Villagers"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-foreground">
            {castleDifference}
          </span>
        </div>
      )}

      {/* Imperial Age */}
      {showImperial && (
        <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
          <Image
            src="/images/Ages/imperial_age_de.png"
            alt="Imperial Age Additional Villagers"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-foreground">
            {imperialDifference}
          </span>
        </div>
      )}
    </div>
  );
}

export default VillagerCounts;