export type Comment = {
  id: number;
  creationTimeSeconds: number;
  commentatorHandle: string;
  locale: string;
  text: string;
  parentCommentId: number;
  rating: number;
};
