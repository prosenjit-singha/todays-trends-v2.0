import { useEffect } from "react";

function useFocusEffect() {
  useEffect(() => {
    function handleFocus() {
      console.info(document.activeElement);
    }
    document.addEventListener("focus", handleFocus);
    return () => document.removeEventListener("focus", handleFocus);
  }, []);
  return null;
}

export default useFocusEffect;
