import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

const voiceOptions = [
  { value: "af_sarah", name: "Sarah (Female)", flag: "/united-states.svg" },
  { value: "af_sky", name: "Sky (Female)", flag: "/united-states.svg" },
  { value: "am_Adam", name: "Adam (Male)", flag: "/united-states.svg" },
  { value: "am_echo", name: "Echo (Male)", flag: "/united-states.svg" },
  { value: "am_eric", name: "Eric (Male)", flag: "/united-states.svg" },
  { value: "am_fenrir", name: "Fenrir (Male)", flag: "/united-states.svg" },
  { value: "am_liam", name: "Liam (Male)", flag: "/united-states.svg" },
  { value: "am_michael", name: "Michael (Male)", flag: "/united-states.svg" },
  { value: "am_onyx", name: "Onyx (Male)", flag: "/united-states.svg" },

  { value: "ff_siwis", name: "Siwis (Female)", flag: "/france.png" },

  { value: "hf_alpha", name: "Alpha (Female)", flag: "/india.jpg" },
  { value: "hf_beta", name: "Beta (Female)", flag: "/india.jpg" },
  { value: "hm_omega", name: "Omega (Male)", flag: "/india.jpg" },
  { value: "hm_psi", name: "Psi (Male)", flag: "/india.jpg" },
];

function Voice({ onHandleInputChange }) {
  const [selectedVoice, setSelectedVoice] = useState();

  return (
    <div className="mt-5">
      <h2>Video Voice</h2>
      <p className="text-sm text-gray-400">Select voice for your video</p>
      <ScrollArea className="h-[240px] w-full">
        <div className="grid grid-cols-2 gap-3">
          {voiceOptions.map((voice, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedVoice(voice.name);
                  onHandleInputChange("voice", voice.value);
                }}
                className={`cursor-pointer flex items-center gap-2 p-3 rounded-lg transition-all border 
                  ${
                    voice.name === selectedVoice
                      ? "border-white"
                      : "dark:bg-slate-900"
                  } hover:border-white`}
              >
                <img src={voice.flag} alt="flag" className="w-5 h-5" />
                <span>{voice.name}</span>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Voice;
