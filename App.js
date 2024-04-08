import React from "react";
import { View, StyleSheet } from "react-native";
import Card from './src/components/Card';

function App() {
  return (
    <View style={styles.container}>
      <Card title="Eddard Stark" text="Winter Is Coming !!"/>
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım, evet tarafından"/>
      <Card title="Serbest" text="İlhami abi sen söyle, ben başka bir ilde miyim?"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
})
export default App;