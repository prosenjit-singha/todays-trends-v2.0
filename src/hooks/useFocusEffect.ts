import { useEffect } from "react";

function useFocusEffect() {
  useEffect(() => {
    function handleFocus({ key }: KeyboardEvent) {
      if (key === "Tab") {
        if (document.activeElement?.getAttribute("data-focus-effect")) {
          document.activeElement.classList.add("custom-focus");
        }
      }
    }
    window.addEventListener("keyup", handleFocus);
    return () => window.removeEventListener("keyup", handleFocus);
  }, []);
  return null;
}

export default useFocusEffect;
