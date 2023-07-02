import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Comment} from '../../types';

type CommentsState = Record<number, Comment[]>;

export const useComments = () => {
  const [comments, setComments] = useState<CommentsState>({});

  useEffect(() => {
    // Load comments from AsyncStorage when component mounts
    const loadComments = async () => {
      const savedComments = await AsyncStorage.getItem('comments');
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    };

    loadComments();
  }, []);

  const saveComments = async (newComments: CommentsState) => {
    await AsyncStorage.setItem('comments', JSON.stringify(newComments));
    setComments(newComments);
  };

  const addComment = async (photoId: number, text: string) => {
    const newComment = {id: Date.now().toString(), text};
    const newComments = {
      ...comments,
      [photoId]: [...(comments[photoId] || []), newComment],
    };

    await saveComments(newComments);
  };

  const deleteComment = async (photoId: number, commentId: string) => {
    const newComments = {
      ...comments,
      [photoId]: comments[photoId].filter(comment => comment.id !== commentId),
    };

    await saveComments(newComments);
  };

  const editComment = async (
    photoId: number,
    commentId: string,
    newText: string,
  ) => {
    const newComments = {
      ...comments,
      [photoId]: comments[photoId].map(comment =>
        comment.id === commentId ? {...comment, text: newText} : comment,
      ),
    };

    await saveComments(newComments);
  };

  return {comments, addComment, deleteComment, editComment};
};
