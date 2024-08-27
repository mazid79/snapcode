"use client";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { themes } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="relative theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out flex items-center justify-between cursor-pointer">
          {theme}
          {showDropdown ? <ChevronUp /> : <ChevronDown />}
        </div>
        {showDropdown && (
          <div className="dropdown-menu relative top-[94px] w-[120px] bg-white shadow-lg rounded-lg transition-transform transform origin-top duration-300 ease-out">
            {themes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                  className="capitalize text-left hover:text-pink-500 transition-all duration-300 ease-in-out py-2 px-4 hover:bg-gray-100 rounded"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default ThemeSelector;
