"use client";

import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Dropdown from "@/components/Dropdown";
import { useState, useEffect } from "react";
import Image from "next/image";
import civData from "@/data/civData.json";

interface Civilization {
  name: string;
  uniqueUnits: string[];
  uniqueTechs: string[];
}

interface UptimeResult {
  feudalAge: string;
  castleAge: string;
  imperialAge?: string;
}

export default function UptimePage() {
  const [selectedCiv, setSelectedCiv] = useState<string>("Generic");
  const [population, setPopulation] = useState<string>("23");
  const [loom, setLoom] = useState<string>("Yes");
  const [fcBonus, setFcBonus] = useState<string>("+2");
  const [uptimeResult, setUptimeResult] = useState<UptimeResult | null>(null);

  const civilizations: Civilization[] = civData.civilizations;

  useEffect(() => {
    const calculateUptime = () => {
      const popCastle = parseInt(fcBonus.substring(1)); // Remove the plus sign
      const popNumber = parseInt(population); // Convert population to number

      // Base times in seconds
      let feudalTime = 130; // Feudal Age research time
      let castleTime = 160; // Castle Age research time

      // Civilization-specific bonuses
      if (selectedCiv === "Malay") {
        feudalTime -= 52; // Malay faster Feudal Age
        castleTime -= 64; // Malay faster Castle Age
      }

      // Calculate villager creation time
      let effectivePop = popNumber - 4; // 3 starting villagers + scout

      if (selectedCiv === "Mayans") effectivePop -= 1; // 1 additional starting villager
      if (selectedCiv === "Chinese") effectivePop -= 2; // Chinese start with more villagers

      let totalFeudal = feudalTime + effectivePop * 25;

      // Loom bonus/penalty
      if (loom === "Yes") {
        if (selectedCiv === "Goths") {
          totalFeudal += 1; // Goths instant Loom
        } else if (selectedCiv === "Portuguese") {
          totalFeudal += 19; // Portuguese faster Loom
        } else {
          totalFeudal += 25; // Normal Loom time
        }
      } else if (selectedCiv === "Mayans") {
        totalFeudal += 12.5; // Mayans housing penalty without Loom
      }

      // Castle Age calculation
      let totalCastle = totalFeudal + castleTime + popCastle * 25;

      if (selectedCiv === "Persians") {
        totalCastle -= popCastle * 25 * 0.1; // Persian work rate bonus
      }

      // Format times
      const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`;
      };

      setUptimeResult({
        feudalAge: formatTime(totalFeudal),
        castleAge: formatTime(totalCastle),
      });
    };

    calculateUptime();
  }, [selectedCiv, population, loom, fcBonus]);

  // Create options for dropdowns
  const civOptions = [
    { value: "Generic", icon: "/images/Civs/generic.png" },
    ...civilizations.map((civ) => ({
      value: civ.name,
      icon: `/images/Civs/${civ.name.toLowerCase()}.png`
    }))
  ];

  const popOptions = Array(24)
    .fill(null)
    .map((_, i) => ({ value: (i + 12).toString() }));
  
  const loomOptions = [
    { value: "Yes" },
    { value: "No" }
  ];
  
  const fcOptions = Array(6)
    .fill(null)
    .map((_, i) => ({ value: `+${i}` }));


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Header 
            text="Uptime Calculator" 
            subtitle="Select civilization, population when clicking up (including scout), and whether you researched loom to find out what time you should reach with flawless execution." 
          />

          <div className="flex flex-col mx-auto w-11/12 max-w-md my-12 space-y-6">
            <Dropdown
              value={selectedCiv}
              onChange={setSelectedCiv}
              options={civOptions}
              label="Civilization"
            />

            <Dropdown
              value={population}
              onChange={setPopulation}
              options={popOptions}
              label="Pop"
            />

            <Dropdown
              value={loom}
              onChange={setLoom}
              options={loomOptions}
              label="Loom"
            />

            <Dropdown
              value={fcBonus}
              onChange={setFcBonus}
              options={fcOptions}
              label="FC"
            />
          </div>

      {/* Uptime Results */}
      <div className="text-center pb-10">
        {uptimeResult && (
          <div className="inline-block">
            <div className="p-6 mx-4">
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Image
                      src="/images/Ages/feudal_age_de.png"
                      alt="Feudal Age"
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-foreground">Feudal Age</div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {uptimeResult.feudalAge}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Image
                      src="/images/Ages/castle_age_de.png"
                      alt="Castle Age"
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-foreground">Castle Age</div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {uptimeResult.castleAge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      </main>
    </div>
  );
}
