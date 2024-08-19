import { Text, SafeAreaView, StyleSheet,View, Image, ScrollView, TextInput,Button,Alert } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/transferir.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ecf0f1'
  },
 
  logo: {
    height: 128,
    width: 128,
  }
});
