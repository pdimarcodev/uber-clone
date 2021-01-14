import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;