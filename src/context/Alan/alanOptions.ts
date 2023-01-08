import { AlanButtonOptions } from "@alan-ai/alan-sdk-web/dist/AlanButtonOptions";

export const alanOptions: AlanButtonOptions = {
  key: process.env.REACT_APP_ALAN_KEY || "",
  onCommand: ({ command, payload }) => {
    /*
    if (command === COMMANDS.NEWS_BY_SOURCE) {
      dispatch(setCategory("All"));
      dispatch(setCountry("All"));
      dispatch(setKeyword(""));
      dispatch(setAPI(payload.API));
      dispatch(setArticles(payload.articles));
      dispatch(setTotalResults(payload.totalResults));
      if (payload.articles.length) dispatch(setLoading(false));
      dispatch(setPage(1));
      dispatch(setSource(payload.source.toUpperCase()));
    } else if (command === COMMANDS.NEWS_BY_TERMS) {
      console.log(payload.articles.length);
      dispatch(setCategory("All"));
      dispatch(setCountry("All"));
      dispatch(setSource("All"));
      dispatch(setAPI(payload.API));
      dispatch(setArticles(payload.articles));
      dispatch(setTotalResults(payload.totalResults));
      if (payload.articles.length) dispatch(setLoading(false));
      dispatch(setPage(1));
      dispatch(setKeyword(payload.keyword));
    } else if (command === COMMANDS.NEWS_BY_CATEGORY) {
      dispatch(setSource("All"));
      dispatch(setCountry("All"));
      dispatch(setKeyword(""));
      dispatch(setAPI(payload.API));
      dispatch(setArticles(payload.articles));
      dispatch(setTotalResults(payload.totalResults));
      if (payload.articles.length) dispatch(setLoading(false));
      dispatch(setPage(1));
      dispatch(setCategory(toTitle(payload.category)));
    }  else if (command === COMMANDS.OPEN_PAGE) {
      const page = wordsToNumbers(payload.page);
      if (page === "one") {
        dispatch(setPage(page));
      } else {
        dispatch(setPage(parseInt(page)));
      }
    } 
*/
    // }
    // onCommand: ({ command, payload }) => {
    //   switch (command) {
    //     case "read-headlines":
    //       window.dispatchEvent(new CustomEvent(command));
    //       break;
    //     case "highlight":
    //       window.dispatchEvent(new CustomEvent(command, { detail: payload }));
    //       break;
    //     case "toggle-theme":
    //       break;
    //     case "go-backward":
    //       break;
    //     case "go-forward":
    //       break;
    //     default:
    //       break;
    //   }
    // },
  },
};
