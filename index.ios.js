// import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// create a Component
const App = () =>
  (
    <View style={{ flex: 1 }}>
      <Header name="Albums!" />
      <AlbumList />
    </View>
  );


// render it to the device
AppRegistry.registerComponent('albums', () => App);
