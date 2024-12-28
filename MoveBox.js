

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';


export default function MoveBox() {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withSpring(370);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <Animated.View style={[{ width: '100%', height: '100%', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }, animatedStyle]}>
      <Text style={{ color: 'white', textAlign: 'center', marginTop: 40, fontSize: 30, fontWeight: 'bold', justifyContent: 'center' }}>Move</Text>
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
