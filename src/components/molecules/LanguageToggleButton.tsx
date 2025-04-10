import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const LanguageToggleButton = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleLanguageChange}
      aria-label="language toggle"
    >
      <ToggleButton value="en" aria-label="English">
        English
      </ToggleButton>
      <ToggleButton value="fr" aria-label="French">
        French
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageToggleButton;
