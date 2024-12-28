

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import MoveBox from './MoveBox';


export default function App() {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 2000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  return (
    <Animated.View style={[{ width: '100%', height: '100%', backgroundColor: 'skyblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
      {/* <Text style={{ color: 'white', textAlign: 'center', marginTop: 40, fontSize: 30, fontWeight: 'bold', justifyContent: 'center' }}>Fade In</Text> */}
      <MoveBox/>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
