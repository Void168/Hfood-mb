import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import Restaurants from '../components/home/Restaurants'
import restaurants from '../data'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'
 
export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(restaurants)
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState("Vận chuyển");

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <Restaurants restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}
