import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import restaurants from '../../../backend/data'

export default function About(props) {
  const formatCategories = restaurants[0].categories.join(' - ')
  const description = `${formatCategories}         Đánh giá: ${restaurants[0].rating} ⭐ (${restaurants[0].reviews}+)`
  const { name, image, price, reviews, rating, categories } = props.route.params
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: '100%', height: 200 }}
    />
  )
}

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
)
