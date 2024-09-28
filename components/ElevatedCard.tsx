import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from './FlatCard';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Left</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Right</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>😎</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>😀</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>😀</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {},
  card: {
    height: 100,
    width: 100,
    margin: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
