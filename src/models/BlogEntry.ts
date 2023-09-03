export type BlogEntry = {
  id: number;
  originalLocale: string;
  creationTimeSeconds: number;
  authorHandle: string;
  title: string;
  content: string;
  locale: string;
  modificationTimeSeconds: number;
  allowViewHistory: boolean;
  tags: Array<string>;
  rating: number;
};
