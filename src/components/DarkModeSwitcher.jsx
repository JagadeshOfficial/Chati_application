import { Moon, Sun } from "@phosphor-icons/react";
import useColorMode from "../hooks/useColorMode";

export default function DarkModeSwitcher() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <label
      className={`relative block h-7.5 w-14 rounded-full ${
        colorMode === "dark" ? "bg-primary" : "bg-stroke"
      }`}
    >
      <input
        type="checkbox"
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
        onChange={() =>
          setColorMode(colorMode === "light" ? "dark" : "light")
        }
      />
      <span
        className={`absolute top-1/2 left-1 transform -translate-y-1/2 h-6 w-6 bg-white rounded-full ${
          colorMode === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {colorMode === "dark" ? <Moon /> : <Sun />}
      </span>
    </label>
  );
}
