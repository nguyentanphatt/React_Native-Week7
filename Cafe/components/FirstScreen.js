import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import jewel from '../assets/jewel.png'
import javasti from '../assets/javasti.png'
import kitanda from '../assets/kitanda.jpg'
export default function FirstScreen( {navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: '700', marginBottom: 50}}>Welcome to Cafe world</Text>
      <View>
        <Image source={jewel} style={styles.img}/>
        <Image source={javasti} style={styles.img}/>
        <Image source={kitanda} style={styles.img}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SecondScreen')}>
        <Text style={{color: '#fff'}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  img:{
    width:200,
    height: 70,
    marginBottom: 30
  },
  button:{
    width: 300,
    height: 50,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});
