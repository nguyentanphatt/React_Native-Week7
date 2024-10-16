import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import  { useState } from 'react'
const Item = ({image, name, price, updateCart}) => {
    const [number, setNumber] = useState(0)

    const handleIncreaseNumber = () =>{
        const quantity = number + 1
        setNumber(quantity)
        updateCart(quantity)
    }
    const handleDecreaseNumber = () =>{
        if(number > 0){
            const quantity = number - 1
            setNumber(quantity)
            updateCart(quantity)
        }       
    }
  return (
    <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row'}}> 
            <Image source={image} style={{width: 50, height: 50}}/>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10}}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>{name}</Text>
                <Text>${price}</Text>
            </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button} onPress={handleDecreaseNumber}>
                <Text style={{fontSize: 16, color: '#fff'}}>-</Text>
            </TouchableOpacity>
            <Text style={{ width: 20, marginLeft: 10}}>{number}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncreaseNumber}>
                <Text style={{fontSize: 16, color: '#fff'}}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    button:{
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#1DD75B',
        alignItems: 'center',
        justifyContent: 'center'
    }
})