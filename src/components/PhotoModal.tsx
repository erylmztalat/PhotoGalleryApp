import React from 'react';
import {View, Modal, Image, Text, TouchableOpacity} from 'react-native';
import {Photo} from '../../types';

type PhotoModalProps = {
  photo: Photo;
  visible: boolean;
  onClose: () => void;
};

const PhotoModal: React.FC<PhotoModalProps> = ({photo, visible, onClose}) => {
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        onPress={onClose}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            source={{uri: photo.fullSizeUrl}}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: 300}}
            resizeMode="contain"
          />
          <Text>{photo.title}</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PhotoModal;
