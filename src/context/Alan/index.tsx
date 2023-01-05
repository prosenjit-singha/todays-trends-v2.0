import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { createContext, useEffect, useRef } from "react";
import { alanOptions } from "./alanOptions";

export const AlanContext = createContext<{ alan: AlanButton | null }>({
  alan: null,
});

type PropsType = {
  children: React.ReactNode;
};

const AlanProvider = ({ children }: PropsType) => {
  const alan = useRef<null | AlanButton>(null);

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
