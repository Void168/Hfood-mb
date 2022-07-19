import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        marginHorizontal: 20,
        justifyContent: 'space-between',
      }}
    >
      <Icon icon="home" text="Trang chủ" />
      <Icon icon="search" text="Tìm kiếm" />
      <Icon icon="shopping-bag" text="Giỏ hàng" />
      <Icon icon="receipt" text="Đơn hàng" />
      <Icon icon="user" text="Tài khoản" />
    </View>
  )
}

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{ marginBottom: 3, alignSelf: 'center' }}
        />
        <Text style={{ fontSize: 10 }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}
