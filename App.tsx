import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Draggable} from './components/libraries/Gesture/Draggable/Draggable';
import {AppBar} from './components/libraries/NativeBase/AppBar';
import {Card} from './components/libraries/Paper/Card';
import {Box} from './components/libraries/Reanimated/Box';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView style={styles.container}>
          <AppBar />
          <ScrollView>
            <View style={styles.center}>
              <Box />
              <Draggable style={styles.draggable}>
                <Text>Drag me</Text>
              </Draggable>
              <View style={styles.cardContainer}>
                <Card
                  content="test content"
                  onCancel={() => null}
                  onConfirm={() => null}
                  title="test"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  draggable: {
    margin: 8,
    zIndex: 2,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  cardContainer: {width: '90%'},
  center: {alignItems: 'center'},
});

export default App;
