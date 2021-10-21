import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements'
//import { Header } from 'react-native/Libraries/NewAppScreen';

export interface AppToolbarProps {
}

export function AppToolbar (props: AppToolbarProps) {
    return (
      <Header
           containerStyle={{backgroundColor:'white'}}
           leftComponent={{icon: 'menu', color: 'black', size: 30}}
           centerComponent={{text:'Drawer', style:{color: 'black', fontSize: 20}}}
      />
    );
}
