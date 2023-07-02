/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import PhotoGrid from './src/components/PhotoGrid';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PhotoGrid />
    </QueryClientProvider>
  );
};

export default App;
