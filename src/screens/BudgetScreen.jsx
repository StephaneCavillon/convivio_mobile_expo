import React, { useEffect } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Appbar } from 'react-native-paper'
import { theme } from '../styles/theming'
import { PieChart } from 'react-native-chart-kit'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'


export default function Budget({ navigation, route }) {
  const event = route.params.event
  const c = [theme.colors.orange, theme.colors.beige]
  const k = {
    location: "Location",
    service: "Prestataires"
  }
  const setData = () => {
    return Object.entries(event.price)
    .slice(1)
    .map(([key, value], i) => {
      return {
        name: k[key],
        price: Number(value),
        color: c[i],
        legendFontColor: theme.colors.pureBlack,
        legendFontSize: 15
      }
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbar.Header style={{ backgroundColor: theme.colors.backdrop }}>
          <Appbar.BackAction onPress={() => { navigation.goBack() }} />
          <Appbar.Content title="Suivi du budget" />
        </Appbar.Header>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 20, flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={theme.title_3}>
            Répartition du budget
          </Text>
          <Text style={theme.paragraph}>
            Au { format(parseISO(event.updatedAt), 'PPP', {locale: fr}) }
          </Text>
          <PieChart
            data={ setData() }
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="price"
            avoidFalseZero={ true }
            backgroundColor="transparent"
            paddingLeft="5"
          ></PieChart>
        </View>
      </View>
    </View>
  )
}
