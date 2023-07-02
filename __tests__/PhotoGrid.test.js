import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import PhotoGrid from '../src/components/PhotoGrid';

test('displays a loading message', async () => {
  const queryClient = new QueryClient();
  const {getByText} = render(
    <QueryClientProvider client={queryClient}>
      <PhotoGrid />
    </QueryClientProvider>,
  );

  await waitFor(() => getByText('Loading...'));
});
