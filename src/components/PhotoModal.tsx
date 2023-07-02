import React, {useState} from 'react';
import {
  View,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import {Photo} from '../../types';
import {useComments} from '../hooks/useComments';

type PhotoModalProps = {
  photo: Photo;
  visible: boolean;
  onClose: () => void;
};

const PhotoModal: React.FC<PhotoModalProps> = ({photo, visible, onClose}) => {
  const {comments, addComment, editComment, deleteComment} = useComments();
  const [newCommentText, setNewCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');

  const handleAddComment = () => {
    addComment(photo.id, newCommentText);
    setNewCommentText('');
  };

  const handleEditComment = (commentId: string) => {
    const commentText = comments[photo.id].find(c => c.id === commentId)?.text;
    if (commentText) {
      setEditingCommentId(commentId);
      setEditingCommentText(commentText);
    }
  };

  const handleSaveComment = () => {
    if (editingCommentId) {
      editComment(photo.id, editingCommentId, editingCommentText);
      setEditingCommentId(null);
      setEditingCommentText('');
    }
  };

  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <TouchableOpacity
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        onPress={onClose}>
        <View
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            source={{uri: photo.fullSizeUrl}}
            style={{width: '100%', height: 300}}
            resizeMode="contain"
          />
          <Text>{photo.title}</Text>
          <FlatList
            data={comments[photo.id] || []}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                {editingCommentId === item.id ? (
                  <View>
                    <TextInput
                      value={editingCommentText}
                      onChangeText={setEditingCommentText}
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      placeholder="Edit comment"
                    />
                    <Button title="Save" onPress={handleSaveComment} />
                  </View>
                ) : (
                  <View>
                    <Text>{item.text}</Text>
                    <Button
                      title="Edit"
                      onPress={() => handleEditComment(item.id)}
                    />
                    <Button
                      title="Delete"
                      onPress={() => deleteComment(photo.id, item.id)}
                    />
                  </View>
                )}
              </View>
            )}
          />
          <TextInput
            value={newCommentText}
            onChangeText={setNewCommentText}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Add a comment"
          />
          <Button title="Add Comment" onPress={handleAddComment} />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PhotoModal;
