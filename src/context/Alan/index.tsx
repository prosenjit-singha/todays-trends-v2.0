import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { createContext, useEffect, useRef, useCallback } from "react";
import { useNewsData } from "../NewsProvider";
import { COMMANDS, ON_COMMAND_PROPS } from "./types";
import { useNavigate } from "react-router-dom";
import { useThemeToggler } from "../ThemeToggler";
const wordToNum = require("word-to-numbers");

export const AlanContext = createContext<{ alan: AlanButton | null }>({
  alan: null,
});

type PropsType = {
  children: React.ReactNode;
};

type OnCommand = object & { command: string; payload: object };

const AlanProvider = ({ children }: PropsType) => {
  const alan = useRef<null | AlanButton>(null);
  const navigate = useNavigate();
  const { articles } = useNewsData();
  const { toggleTheme } = useThemeToggler();

  //  Event Handlers
  const handleNewsByCategory = useCallback(() => {}, [alan]);

  const handleHighlight = useCallback(
    ({ detail: { activeIndex } }: CustomEvent<{ activeIndex: number }>) => {
      console.info(activeIndex);
    },
    [alan]
  );

  const handleReadHeadlines = useCallback(() => {
    alan.current?.callProjectApi(
      "readHeadlines",
      { articles },
      (err, result) => {
        console.info(err, result);
      }
    );
  }, [alan, articles]);

  const handleOpenArticle = useCallback(
    ({ detail }: CustomEvent<{ number: number }>) => {
      console.info(detail.number);
      const index = parseInt(wordToNum(detail.number));

      if (isNaN(index)) {
        alan.current?.playText("Faild to open the article");
        return;
      }
      alan.current?.playText(`Openning article number ${index}`);

      const url = articles[index - 1].url;

      window.open(url, "_blank")?.focus();

      console.info(index, url);
    },
    [alan, articles]
  );

  // Event listener
  useEffect(() => {
    window.addEventListener(COMMANDS.NEWS_BY_CATEGORY, handleNewsByCategory);
    window.addEventListener(COMMANDS.READ_HEADLINES, handleReadHeadlines);
    window.addEventListener(
      COMMANDS.HIGHLIGHT,
      handleHighlight as EventListener
    );
    window.addEventListener(
      COMMANDS.OPEN_ARTICLE,
      handleOpenArticle as EventListener
    );

    return () => {
      window.removeEventListener(
        COMMANDS.NEWS_BY_CATEGORY,
        handleNewsByCategory
      );
      window.removeEventListener(COMMANDS.READ_HEADLINES, handleReadHeadlines);
      window.removeEventListener(
        COMMANDS.HIGHLIGHT,
        handleHighlight as EventListener
      );
      window.removeEventListener(
        COMMANDS.OPEN_ARTICLE,
        handleOpenArticle as EventListener
      );
    };
  }, [handleNewsByCategory, handleReadHeadlines]);

  useEffect(() => {
    if (alan.current) return;
    else {
      alan.current = alanBtn({
        key: process.env.REACT_APP_ALAN_KEY || "",
        onCommand: ({ command, payload }: ON_COMMAND_PROPS) => {
          switch (command) {
            case "read-headlines":
              window.dispatchEvent(new CustomEvent(command));
              break;
            case "highlight":
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
              break;
            case "open-article":
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
              break;
            case "stop-active-article-effect":
              break;
            case "navigate":
              break;
            case "toggle-theme":
              toggleTheme();
              break;
            case "go-backward":
              navigate(-1);
              break;
            case "go-forward":
              navigate(1);
              break;

            default:
              break;
          }
        },
      } as any);
    }
  }, []);

  return (
    <AlanContext.Provider value={{ alan: alan.current }}>
      {children}
    </AlanContext.Provider>
  );
};

export default AlanProvider;
