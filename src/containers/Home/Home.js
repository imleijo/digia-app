import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import List from '../../components/List';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{color: '#8C8C8C', marginVertical: 15, fontWeight: 'bold'}}>
          List of participants
        </Text>
        <View style={{flex: 3}}>
          <List />
        </View>
      </View>
    </View>
  );
}

export default Home;
