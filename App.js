import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TextInput, Pressable } from 'react-native';
import { styles } from "./styles.js";


export default function App() {
  return (
    <ImageBackground source={require ('./assets/fundo.jpg')} style={styles.container}>
      <Image source={require ('./assets/Instagram.png')} style={styles.insta} />
      <StatusBar style="auto" />
      <View style= {styles.ct}>
        <TextInput style= {styles.forms} 
          placeholder='    Username' 
          placeholderTextColor={'#ffffffb9'}
        />
         <TextInput style= {styles.forms} 
          placeholder='   Password'
          placeholderTextColor={'#ffffffb9'}
          keyboardType='pasword'
          secureTextEntry
        />
       </View>
        <Pressable style= {styles.botao}><Text style={styles.login}>Login</Text></Pressable>
        <View style={styles.link} >
        <Pressable><Text style={styles.forgot}>Forgot your login details?</Text></Pressable>
        <Pressable><Text style={styles.help}> Get help signing in.</Text></Pressable>
        </View>

        <View style={styles.footer}>
          <View style={ styles.linha} ></View>
          <Text style={styles.or}>OR</Text>
          <View style={ styles.linhadois}></View>
        </View>

      </ImageBackground>
  );
}
