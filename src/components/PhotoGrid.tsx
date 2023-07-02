import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
        style={{marginLeft: 20, marginTop: 30}}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelectedPhoto(item)}>
            <Image
              source={{uri: item.thumbnailUrl}}
              style={[imageStyles.image, imageStyles.shadow]}
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

const imageStyles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});

export default PhotoGrid;
