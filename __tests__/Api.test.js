import fetchMock from 'jest-fetch-mock';
import {getPhotos} from '../src/api';
import {photos} from '../src/api/mockData';

fetchMock.enableMocks();

test('fetchPhotos handles successful response', async () => {
  fetch.mockResponseOnce(JSON.stringify(photos));

  // Act
  const response = await getPhotos();

  // Assert
  expect(response).toEqual(photos);
});
