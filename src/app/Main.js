import React from 'react';
import {
  View,
} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import { Todo } from './Todo';

export const Main = () => (
  <TabView>
    <Todo tabLabel="Todos" />
    <View tabLabel="other" />
  </TabView>
);
