import { AlanButtonOptions } from "@alan-ai/alan-sdk-web/dist/AlanButtonOptions";

export enum COMMANDS {
  HIGHLIGHT = "highlight",
  OPEN_ARTICLE = "open-article",
  NEWS_BY_SOURCE = "news-by-source",
  NEWS_BY_CATEGORY = "news-by-category",
  NEWS_BY_TERMS = "news-by-terms",
  OPEN_PAGE = "open-page",
  READ_HEADLINES = "read-headlines",
  NAVIGATE = "navigate",
  STOP_ACTIVE_ARTICLE_EFFECT = "stop-active-article-effect",
  GO_BACKWARD = "go-backward",
  GO_FORWARD = "go-forward",
  SET_THEME = "set-theme",
  TOGGLE_THEME = "toggle-theme",
}

export type ON_COMMAND_PROPS = {} & {
  command: string;
  payload: object;
};

export type AlanOptions = {
  onCommand: (commandData: ON_COMMAND_PROPS) => void;
} & Omit<AlanButtonOptions, "onCommand">;