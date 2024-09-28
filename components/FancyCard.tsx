import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGJOw_aWnKWYZu1rzlaKydvyqRNNGpss9iw&s"
        }}
        style={styles.cardImage}
        />
        <Text style={[styles.cardTitle,styles.cardText]}>Naruto OzuMaki</Text>
        <Text style={[styles.cardLabel,styles.cardText]}>Leaf Village</Text>
        <Text style={[styles.cardDescription,styles.cardText]}>Naruto Uzumaki is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. He is the main protagonist of the series and the de facto leader of Team Kakashi.</Text>
        <Text style={[styles.cardFooter,styles.cardText]}>12 min ago</Text>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card:{

    height:370,
    backgroundColor:"#CAD5E2",
    color:"black",
    borderRadius:12,
    marginHorizontal:2,
   
  },
  cardElevated:{},
  cardImage:{
    height:220,
    borderRadius:8,
  },
  cardTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginVertical:2,
  },
  cardLabel:{
    fontSize:14,
    fontWeight:"600"
  }
  ,
  cardText:{
    color:"black",
    marginHorizontal:2,
  },
  cardDescription:{}
  ,
  cardFooter:{
    fontSize:12,
    fontWeight:"600",
    marginTop:12,
  }
})