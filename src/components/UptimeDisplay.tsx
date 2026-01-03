import Image from "next/image";
import { Build } from "@/types/build";
import { hasAgeTransition } from "@/lib/villagerCalculator";

interface UptimeDisplayProps {
  build: Build;
}

function UptimeDisplay({ build }: UptimeDisplayProps) {
  if (!build.uptime) {
    return null;
  }

  // Get uptime values
  const feudalUptime = build.uptime.feudalAge || build.uptime.feudal;
  const castleUptime = build.uptime.castleAge || build.uptime.castle;
  const imperialUptime = build.uptime.imperialAge || build.uptime.imperial;

  // Check if ages are reached
  const hasCastle = hasAgeTransition(build, "castleAge");
  const hasImperial = hasAgeTransition(build, "imperialAge");

  return (
    <div className="flex items-center flex-wrap gap-2 mb-2">
      {/* Feudal Age Uptime */}
      {feudalUptime && (
        <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
          <Image
            src="/images/Ages/feudal_age_de.png"
            alt="Feudal Age Uptime"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-foreground">
            {feudalUptime}
          </span>
        </div>
      )}

      {/* Castle Age Uptime */}
      {castleUptime && hasCastle && (
        <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
          <Image
            src="/images/Ages/castle_age_de.png"
            alt="Castle Age Uptime"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-foreground">
            {castleUptime}
          </span>
        </div>
      )}

      {/* Imperial Age Uptime */}
      {imperialUptime && hasImperial && (
        <div className="flex items-center space-x-2 bg-muted px-2 py-1 rounded-default">
          <Image
            src="/images/Ages/imperial_age_de.png"
            alt="Imperial Age Uptime"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-foreground">
            {imperialUptime}
          </span>
        </div>
      )}
    </div>
  );
}

export default UptimeDisplay;