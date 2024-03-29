declare module "@alan-ai/alan-sdk-web/dist/AlanButtonOptions" {
  const COMMANDS = {
    HIGHLIGHT: "highlight",
    OPEN_ARTICLE: "open-article",
    NEWS_BY_SOURCE: "news-by-source",
    NEWS_BY_CATEGORY: "news-by-category",
    NEWS_BY_TERMS: "news-by-terms",
    OPEN_PAGE: "open-page",
    READ_HEADLINES: "read-headlines",
    NAVIGATE: "navigate",
    STOP_ACTIVE_ARTICLE_EFFECT: "stop-active-article-effect",
    GO_BACKWARD: "go-backward",
    GO_FORWARD: "go-forward",
    SET_THEME: "set-theme",
    TOGGLE_THEME: "toggle-theme",
  } as const;

  type ReverseMap<T> = T[keyof T];

  export type ON_COMMAND_PROPS = {} & {
    command: ReverseMap<typeof COMMANDS>;
    payload: object;
  };

  interface AlanButtonOptions extends Omit<ABO, "onCommand"> {
    key: string;
    rootEl?: HTMLElement;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    top?: number | string;
    position?: string;
    pinned?: boolean;
    showOverlayOnMicPermissionPrompt?: boolean;
    zIndex?: number;
    onEvent?: (event: object) => void;
    onButtonState?: (state: string) => void;
    onConnectionStatus?: (status: string) => void;
    onCommand?: (commandData: ON_COMMAND_PROPS) => void;
  }
}
