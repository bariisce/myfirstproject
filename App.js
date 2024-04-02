import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Start</Text>
          <Text style={styles.card_text}>Winter is Coming !!</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Arif Işık</Text>
          <Text style={styles.card_text}>Uzaylılar tarafından kaçırıldım, evet tarafından</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Serbest</Text>
          <Text style={styles.card_text}>İlhami abi sen söyle, ben başka bir ilde miyim?</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>LIKED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 30,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 15,
    margin: 10,
    marginTop: 3,
    marginLeft: 30,
  },
  card_button_container: {
    backgroundColor: '#00C2FF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  card_button_title: {
    fontWeight: 'bold',
    color: 'white',
  },
})
export default App;