import { BlogEntry } from "./BlogEntry.js";
import { Comment } from "./Comment.js";

export type RecentAction = {
  timeSeconds: number;
  blogEntry: BlogEntry;
  comment: Comment;
};
