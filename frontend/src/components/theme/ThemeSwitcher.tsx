import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Check,
  Contrast,
  Eye,
  Moon,
  Palette,
  Sun,
} from "lucide-react";

type ThemeMode = "light" | "dark" | "comfort" | "contrast";

type ThemeOption = {
  id: ThemeMode;
  label: string;
  description: string;
  icon: LucideIcon;
};

const THEME_STORAGE_KEY = "nexhire-theme";

const themeOptions: ThemeOption[] = [
  {
    id: "light",
    label: "Light",
    description: "Clear and bright",
    icon: Sun,
  },
  {
    id: "dark",
    label: "Night",
    description: "Designed for low light",
    icon: Moon,
  },
  {
    id: "comfort",
    label: "Eye comfort",
    description: "Warm and reduced glare",
    icon: Eye,
  },
  {
    id: "contrast",
    label: "High contrast",
    description: "Maximum visibility",
    icon: Contrast,
  },
];

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  const isValidTheme = themeOptions.some(
    (option) => option.id === savedTheme,
  );

  return isValidTheme ? (savedTheme as ThemeMode) : "dark";
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTheme =
    themeOptions.find((option) => option.id === theme) ?? themeOptions[1];

  const ActiveIcon = activeTheme.icon;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    document.documentElement.style.colorScheme =
      theme === "dark" || theme === "contrast" ? "dark" : "light";

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function selectTheme(selectedTheme: ThemeMode) {
    setTheme(selectedTheme);
    setIsOpen(false);
  }

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        className="theme-trigger"
        type="button"
        aria-label={`Current appearance: ${activeTheme.label}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <ActiveIcon size={18} aria-hidden="true" />

        <span className="theme-trigger-label">
          {activeTheme.label}
        </span>

        <Palette
          className="theme-trigger-palette"
          size={15}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="theme-menu"
          role="menu"
          aria-label="Choose appearance"
        >
          <div className="theme-menu-heading">
            <strong>Appearance</strong>
            <span>Choose your preferred viewing mode</span>
          </div>

          <div className="theme-options">
            {themeOptions.map((option) => {
              const OptionIcon = option.icon;
              const isSelected = option.id === theme;

              return (
                <button
                  className={`theme-option${
                    isSelected ? " theme-option-selected" : ""
                  }`}
                  key={option.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  onClick={() => selectTheme(option.id)}
                >
                  <span className="theme-option-icon">
                    <OptionIcon size={18} aria-hidden="true" />
                  </span>

                  <span className="theme-option-copy">
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </span>

                  <span className="theme-option-check">
                    {isSelected && (
                      <Check size={17} aria-hidden="true" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;