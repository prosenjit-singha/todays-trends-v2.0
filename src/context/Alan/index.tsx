import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { createContext, useState, useEffect, useRef } from "react";
import { alanOptions } from "./alanOptions";

export const AlanContext = createContext(null);

type PropsType = {
  children: React.ReactNode;
};

const AlanProvider = ({ children }: PropsType) => {
  const [alan, setAlan] = useState<null | AlanButton>(null);
  useEffect(() => {
    if (alan !== undefined) return;
    else {
      setAlan(alanBtn(alanOptions as any));
    }
  }, []);
  return <AlanContext.Provider value={null}>{children}</AlanContext.Provider>;
};

export default AlanProvider;
