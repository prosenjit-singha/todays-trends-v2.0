const categoryList = {
  Business: "business",
  Entertainment: "entertainment",
  General: "general",
  Health: "health",
  Science: "science",
  Sports: "sports",
  Technology: "technology",
} as const;

export default categoryList;

type ReverseMap<T> = T[keyof T];

export type Category = ReverseMap<typeof categoryList> | "";
