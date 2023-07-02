import {useQuery} from 'react-query';
import {getPhotos} from '../api';

export const usePhotos = () => {
  return useQuery('photos', getPhotos);
};
