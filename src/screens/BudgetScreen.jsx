import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { Appbar, TextInput } from 'react-native-paper'
import { theme } from '../styles/theming'
import { PieChart } from 'react-native-chart-kit'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import EventCardLight from '../components/EventCardLight'


export default function Budget({ navigation, route }) {
  const [ LeftBudget, setLeftBudget ] = useState(0)
  const event = route.params.event
  const c = [theme.colors.orange, theme.colors.beige]
  const k = {
    location: "Location",
    service: "Prestataires"
  }

  const calcLeftBudget = () => {
    return event.price.budget - (event.price.location + event.price.service)
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

  useEffect(() => {
    setLeftBudget(calcLeftBudget())
  })
  return (
    <ScrollView overScrollMode="never" style={{ flex: 1 }}>
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
          <Text style={theme.label}>
            &#201;vènement concerné
          </Text>
          <EventCardLight event={event}></EventCardLight>
          <Text style={theme.label}>
            Budget client
          </Text>
          <TextInput
            disabled
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{ colors: { primary: theme.colors.orange } }}
            value={String(event.price.budget)}
            autoCapitalize='sentences'
              />
          <Text style={theme.label}>
            Coût location de matériel
          </Text>
          <TextInput
            disabled
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{ colors: { primary: theme.colors.orange } }}
            value={String(event.price.location)}
            autoCapitalize='sentences'
              />
          <Text style={theme.label}>
            Coût prestation de services
          </Text>
          <TextInput
            disabled
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{ colors: { primary: theme.colors.orange } }}
            value={String(event.price.service)}
            autoCapitalize='sentences'
              />
          <Text style={theme.label}>
            Budget Restant
          </Text>
          <TextInput
            disabled
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{ colors: { primary: theme.colors.orange } }}
            value={String(LeftBudget)}
            autoCapitalize='sentences'
              />

      </View>
    </ScrollView>
  )
}
