import {photos} from './mockData';

export const getPhotos = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return photos;
};
