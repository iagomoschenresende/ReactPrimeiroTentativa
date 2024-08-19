import { Text, SafeAreaView, StyleSheet,View, Image, ScrollView, TextInput,Button,Alert } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
    <Card>
    <AssetExample/>
    </Card> 
      <Text style={styles.paragraph}>
        Bem vindo ao login do site APPS.components
      </Text>
     <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Digite seu nome:"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Digite sua senha:"
      />
      <Button
        title="Fazer login"
        color="#841584" 
      />
      <Text style={styles.senha}>
        Esqueci minha senha
      </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  },
  senha: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  },
});
