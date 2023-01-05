import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { createContext, useEffect, useRef } from "react";
import { alanOptions } from "./alanOptions";
import { COMMANDS } from "./types";

export const AlanContext = createContext<{ alan: AlanButton | null }>({
  alan: null,
});

type PropsType = {
  children: React.ReactNode;
};

const AlanProvider = ({ children }: PropsType) => {
  const alan = useRef<null | AlanButton>(null);

  //  Event Handlers
  function handleNewsByCategory() {}

  // Event listener
  useEffect(() => {
    window.addEventListener(COMMANDS.NEWS_BY_CATEGORY, handleNewsByCategory);
  }, []);

  useEffect(() => {
    if (alan.current) return;
    else {
      alan.current = alanBtn(alanOptions as any);
    }
  }, []);

  return (
    <AlanContext.Provider value={{ alan: alan.current }}>
      {children}
    </AlanContext.Provider>
  );
};

export default AlanProvider;
