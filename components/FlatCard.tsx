import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
 
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  card: {
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: '#3c56bd',
  },
  cardThree: {
    backgroundColor: '#32a852',
  },
});
