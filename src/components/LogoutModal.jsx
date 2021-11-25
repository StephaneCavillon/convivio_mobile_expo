import React from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { theme } from '../styles/theming'
import Button from './Button'

export function LogoutModal (props) {
  const { modalVisibility, setModalVisibility, logout } = props
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true} style
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirmer la deconnexion</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-between', width:'80%'}}>
              <Button
                title='oui'
                width='100%'
                onPress={() => logout()}
              />
              <Button
                title='non'
                width='100%'
                color={theme.colors.beige}
                onPress={() => setModalVisibility(!modalVisibility)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center"
  }
});