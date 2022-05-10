import React, {ReactNode, useRef} from 'react';
import {Platform, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type DraggableProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
};

type ContextType = {
  x: number;
  y: number;
};

export const Draggable = ({children, style}: DraggableProps) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const isPressed = useSharedValue(false);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(event => {
      x.value = event.translationX;
      y.value = event.translationY;
    })
    .onEnd(() => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const panStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: withTiming(isPressed.value ? 1.2 : 1)},
        {translateX: x.value},
        {translateY: y.value},
      ],
    };
  }, [x, y, isPressed]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.z}>
        <Animated.View style={[styles.box, panStyle, style]}>
          {children}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 8,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  z: {
    zIndex: 999,
  },
});
