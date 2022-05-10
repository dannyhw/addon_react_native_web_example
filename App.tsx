import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Draggable} from './components/libraries/Gesture/Draggable/Draggable';
import {AppBar} from './components/libraries/NativeBase/AppBar';
import {Card} from './components/libraries/Paper/Card';
import {Box} from './components/libraries/Reanimated/Box';
import {Icon} from './components/libraries/VectorIcons/Icon';

const App = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFillObject}>
      <NativeBaseProvider>
        <PaperProvider theme={DefaultTheme}>
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
              <Icon name="account" />
            </View>
          </ScrollView>
        </PaperProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  textContainer: {width: '100%', padding: 8},
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  draggable: {
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    zIndex: 100,
  },
  cardContainer: {width: '90%'},
  center: {alignItems: 'center'},
});

export default App;
