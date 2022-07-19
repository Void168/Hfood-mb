import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  {
    image: require('../../../assets/images/shopping-bag.png'),
    text: 'Đặt hàng',
  },
  {
    image: require('../../../assets/images/bread.png'),
    text: 'Bánh',
  },
  {
    image: require('../../../assets/images/fast-food.png'),
    text: 'Đồ ăn nhanh',
  },
  {
    image: require('../../../assets/images/deals.png'),
    text: 'Deals hot',
  },
  {
    image: require('../../../assets/images/coffee.png'),
    text: 'Cà phê',
  },
  {
    image: require('../../../assets/images/soft-drink.png'),
    text: 'Đồ uống',
  },
  {
    image: require('../../../assets/images/desserts.png'),
    text: 'Tráng miệng',
  },
]

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{ alignItems: 'center', marginRight: 30 }}
            >
              <Image
                source={item.image}
                style={{ width: 50, height: 40, resizeMode: 'contain' }}
              />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                {item.text}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
