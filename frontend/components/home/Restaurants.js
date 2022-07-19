import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'
import restaurants from '../../../backend/data'

export default function Restaurants({ navigation, ...props }) {
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            key={index}
            style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
          >
            <RestaurantImage image={restaurant.image} />
            <RestaurantInfo
              name={restaurant.name}
              rating={restaurant.rating}
              price={restaurant.price}
              deliverTime={restaurant.deliverTime}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: '100%', height: 180 }}
      />
      <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  )
}

const RestaurantInfo = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>
          {props.deliverTime} phút
        </Text>
        <View
          style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
        >
          <Text>{props.rating}</Text>
        </View>
      </View>
      <View>
        <Text>Giá từ: {props.price} vnđ</Text>
      </View>
    </>
  )
}
