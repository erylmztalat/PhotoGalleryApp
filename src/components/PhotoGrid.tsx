import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {Photo} from '../../types';
import {usePhotos} from '../hooks/usePhotos';
import PhotoModal from './PhotoModal';

const PhotoGrid = () => {
  const {data: photos, isLoading, isError} = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  return (
    <>
      <FlatList
        data={photos}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelectedPhoto(item)}>
            <Image
              source={{uri: item.thumbnailUrl}}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
        )}
      />
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          visible={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
};

export default PhotoGrid;
