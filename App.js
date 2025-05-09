import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import appRotas from './src/rotas/appRotas';

export default function App() {


  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <appRotas />
    </SafeAreaView>
}