import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor='#f50d41'
      style='auto' />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 40:0 
  },
});
