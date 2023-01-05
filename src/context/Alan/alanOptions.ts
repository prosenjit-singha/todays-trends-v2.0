import { AlanButtonOptions } from "@alan-ai/alan-sdk-web/dist/AlanButtonOptions";

export const alanOptions: AlanButtonOptions = {
  key: process.env.REACT_APP_ALAN_KEY || "",
  onCommand: ({ command, payload }) => {},
  // onCommand: ({ command, payload }) => {
  // if (command === COMMANDS.NEWS_BY_SOURCE) {
  //   //   dispatch(setCategory("All"));
  //   //   dispatch(setCountry("All"));
  //   //   dispatch(setKeyword(""));
  //   //   dispatch(setAPI(payload.API));
  //   //   dispatch(setArticles(payload.articles));
  //   //   dispatch(setTotalResults(payload.totalResults));
  //   //   if (payload.articles.length) dispatch(setLoading(false));
  //   //   dispatch(setPage(1));
  //   //   dispatch(setSource(payload.source.toUpperCase()));
  //   // } else if (command === COMMANDS.NEWS_BY_TERMS) {
  //   //   console.log(payload.articles.length);
  //   //   dispatch(setCategory("All"));
  //   //   dispatch(setCountry("All"));
  //   //   dispatch(setSource("All"));
  //   //   dispatch(setAPI(payload.API));
  //   //   dispatch(setArticles(payload.articles));
  //   //   dispatch(setTotalResults(payload.totalResults));
  //   //   if (payload.articles.length) dispatch(setLoading(false));
  //   //   dispatch(setPage(1));
  //   //   dispatch(setKeyword(payload.keyword));
  //   // } else if (command === COMMANDS.NEWS_BY_CATEGORY) {
  //   //   dispatch(setSource("All"));
  //   //   dispatch(setCountry("All"));
  //   //   dispatch(setKeyword(""));
  //   //   dispatch(setAPI(payload.API));
  //   //   dispatch(setArticles(payload.articles));
  //   //   dispatch(setTotalResults(payload.totalResults));
  //   //   if (payload.articles.length) dispatch(setLoading(false));
  //   //   dispatch(setPage(1));
  //   //   dispatch(setCategory(toTitle(payload.category)));
  //   // } else if (command === COMMANDS.HIGHLIGHT) {
  //   //   dispatch(setActiveArticle(payload.activeIndex));
  //   // } else if (command === COMMANDS.OPEN_PAGE) {
  //   //   const page = wordsToNumbers(payload.page);
  //   //   if (page === "one") {
  //   //     dispatch(setPage(page));
  //   //   } else {
  //   //     dispatch(setPage(parseInt(page)));
  //   //   }
  //   // } else if (command === COMMANDS.READ_HEADLINES) {
  //   //   window.dispatchEvent(new CustomEvent(command));
  //   // } else if (command === COMMANDS.OPEN_ARTICLE) {
  //   //   window.dispatchEvent(new CustomEvent(command, { detail: payload }));
  //   // } else if (command === COMMANDS.NAVIGATE) {
  //   //   const path = getPath(payload.pathName);
  //   //   console.log(path);
  //   //   navigate(path);
  //   // } else if (command === COMMANDS.STOP_ACTIVE_ARTICLE_EFFECT) {
  //   //   dispatch(setActiveArticle(null));
  //   // } else if (command === COMMANDS.GO_BACKWARD) {
  //   //   navigate(-1);
  //   // } else if (command === COMMANDS.GO_FORWARD) {
  //   //   navigate(1);
  //   // } else if (command === COMMANDS.SET_THEME) {
  //   //   window.dispatchEvent(new CustomEvent(command, { detail: payload }));
  //   // } else if (command === COMMANDS.TOGGLE_THEME) {
  //   //   window.dispatchEvent(new CustomEvent(command));
  //   // }
  // }
  // },
};
