import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerSection}>
        <View style={styles.square} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Lord Software</Text>
      </View>
    </View>
  );
}
