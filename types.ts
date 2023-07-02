export type Comment = {
  id: string;
  text: string;
};

export type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
  fullSizeUrl: string;
  comments: Comment[];
};
