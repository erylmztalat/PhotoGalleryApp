import {useState} from 'react';

type Comment = string;
type CommentsState = Record<number, Comment[]>;

const initialComments: CommentsState = {};

export const useComments = () => {
  const [comments, setComments] = useState<CommentsState>(initialComments);

  const addComment = (photoId: number, comment: Comment) => {
    setComments({
      ...comments,
      [photoId]: [...(comments[photoId] || []), comment],
    });
  };

  const deleteComment = (photoId: number, commentIndex: number) => {
    setComments({
      ...comments,
      [photoId]: comments[photoId].filter((_, i) => i !== commentIndex),
    });
  };

  const editComment = (
    photoId: number,
    commentIndex: number,
    newComment: Comment,
  ) => {
    setComments({
      ...comments,
      [photoId]: comments[photoId].map((comment, i) =>
        i === commentIndex ? newComment : comment,
      ),
    });
  };

  return {comments, addComment, deleteComment, editComment};
};
