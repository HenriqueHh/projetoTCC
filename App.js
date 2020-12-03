import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function naVet(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}