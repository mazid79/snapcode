"use client";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { languages } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

function LanguageSelector({
  language,
  setLanguage,
  seActiveIcon,
}: LanguageSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Language</p>
        <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out flex items-center justify-between cursor-pointer">
          {language}
          {showDropdown ? <ChevronUp /> : <ChevronDown />}
        </div>

        {showDropdown && (
          <div className="dropdown-menu w-[140px] top-[94px] bg-white shadow-lg rounded-lg transition-transform transform origin-top duration-300 ease-out">
            {languages.map((lang, i) => {
              return (
                <button
                  key={i}
                  className="dropdown-item text-left hover:text-pink-500 transition-all duration-300 ease-in-out flex items-center gap-2 py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  <img src={lang.icon} alt={`${lang.name} icon`} className="w-4 h-4" />
                  {lang.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default LanguageSelector;
