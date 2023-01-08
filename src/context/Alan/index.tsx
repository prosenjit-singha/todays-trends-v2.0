import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { createContext, useEffect, useRef, useCallback } from "react";
import { useNewsData } from "../NewsProvider";
import { COMMANDS, ON_COMMAND_PROPS } from "./types";
import { useNavigate } from "react-router-dom";
import { useThemeToggler } from "../ThemeToggler";
import { Category } from "../../data/categoryList";
const wordToNum = require("word-to-numbers");

export const AlanContext = createContext<{ alan: AlanButton | null }>({
  alan: null,
});

type PropsType = {
  children: React.ReactNode;
};

// type OnCommand = object & { command: string; payload: object };

const AlanProvider = ({ children }: PropsType) => {
  const alan = useRef<null | AlanButton>(null);
  const navigate = useNavigate();
  const { articles, setActiveArticle, setFilter, filter } = useNewsData();
  const { toggleTheme, theme } = useThemeToggler();

  //  Event Handlers
  const handleNewsByCategory = useCallback(
    ({ detail: { category } }: CustomEvent<{ category: Category }>) => {
      setFilter({ ...filter, category });
    },
    [setFilter, filter]
  );

  const handleHighlight = useCallback(
    ({ detail: { activeIndex } }: CustomEvent<{ activeIndex: number }>) => {
      setActiveArticle(activeIndex);
    },
    [setActiveArticle]
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
        alan.current?.playText("Failed to open the article");
        return;
      }
      alan.current?.playText(`Opening article number ${index}`);

      const url = articles[index - 1].url;

      window.open(url, "_blank")?.focus();

      console.info(index, url);
    },
    [alan, articles]
  );
  const handlePageChange = useCallback(
    ({ detail: { page } }: CustomEvent<{ page: string }>) => {
      const pageNumber = parseInt(wordToNum(page));
      setFilter({ ...filter, page: pageNumber });
    },
    [filter, setFilter]
  );

  const handleSetTheme = useCallback(
    ({ detail }: CustomEvent<{ mode: "light" | "dark" }>) => {
      if (theme.palette.mode === detail.mode) {
        alan.current?.playText(
          `The website theme is already in the ${detail.mode} mode.`
        );
      } else {
        alan.current?.playText(
          `Changing website theme to the ${detail.mode} mode.`
        );
        toggleTheme();
      }
    },
    [alan, theme, toggleTheme]
  );

  // Event listener
  useEffect(() => {
    window.addEventListener(
      COMMANDS.NEWS_BY_CATEGORY,
      handleNewsByCategory as EventListener
    );
    window.addEventListener(COMMANDS.READ_HEADLINES, handleReadHeadlines);
    window.addEventListener(
      COMMANDS.HIGHLIGHT,
      handleHighlight as EventListener
    );
    window.addEventListener(
      COMMANDS.OPEN_ARTICLE,
      handleOpenArticle as EventListener
    );
    window.addEventListener(
      COMMANDS.SET_THEME,
      handleSetTheme as EventListener
    );
    window.addEventListener(
      COMMANDS.OPEN_PAGE,
      handlePageChange as EventListener
    );

    return () => {
      window.removeEventListener(
        COMMANDS.NEWS_BY_CATEGORY,
        handleNewsByCategory as EventListener
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
      window.removeEventListener(
        COMMANDS.SET_THEME,
        handleSetTheme as EventListener
      );
      window.removeEventListener(
        COMMANDS.OPEN_PAGE,
        handlePageChange as EventListener
      );
    };
  }, [
    handleNewsByCategory,
    handleReadHeadlines,
    handleHighlight,
    handleOpenArticle,
    handleSetTheme,
    handlePageChange,
  ]);

  // News Data Updater
  // useEffect(() => {
  //   if (!alan.current?.isActive()) alan.current?.activate();

  //   alan.current?.callProjectApi("updateData", { articles, page }, () => {});
  // }, [articles]);

  useEffect(() => {
    if (alan.current) return;
    else {
      alan.current = alanBtn({
        key: process.env.REACT_APP_ALAN_KEY || "",
        onCommand: ({ command, payload }: ON_COMMAND_PROPS) => {
          switch (command) {
            case "news-by-category":
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
              break;
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
              setActiveArticle(null);
              break;
            case "navigate":
              navigate(payload?.path || "/");
              break;
            case "open-page":
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
              break;
            case "toggle-theme":
              toggleTheme();
              break;
            case "set-theme":
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
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
  }, [navigate, setActiveArticle, toggleTheme]);

  return (
    <AlanContext.Provider value={{ alan: alan.current }}>
      {children}
    </AlanContext.Provider>
  );
};

export default AlanProvider;
