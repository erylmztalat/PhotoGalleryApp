import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {usePhotos} from '../hooks/usePhotos';

const PhotoGrid = () => {
  const {data: photos, isLoading, isError} = usePhotos();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      renderItem={({item}) => (
        <TouchableOpacity>
          <Image
            source={{uri: item.thumbnailUrl}}
            style={{width: 100, height: 100}}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default PhotoGrid;
