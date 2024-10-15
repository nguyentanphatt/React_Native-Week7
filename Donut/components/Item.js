import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import yellow_donut from '../assets/yellow_donut.png'
import red_donut from '../assets/red_donut.png'
import green_donut from '../assets/green_donut.png'
import pink_donut from '../assets/pink_donut.png'
const Item = ( {image, title, description, price, navigation} ) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={{width: 100, height: 100}}/>
        <View style={styles.details}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>{title}</Text>
            <Text>{description}</Text>
            <Text style={{fontSize: 18, fontWeight: '700'}}>${price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('SecondScreen', {image, title, description, price})}>
            <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        width: 400,
        backgroundColor: '#F4DDDD',
        height: 120,
        padding: 10,
        borderRadius: 10
    },
    details:{
        marginLeft: 10,
    },
    addButton: {
        backgroundColor: '#FFB300',  // Orange button
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
      },
      plusSign: {
        fontSize: 20,
        color: '#FFF',
      },
})