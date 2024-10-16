import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import item01 from '../assets/item01.png'
import item02 from '../assets/item02.png'
import item03 from '../assets/item03.png'
import item04 from '../assets/item04.png'
import back from '../assets/back.png'
import find from '../assets/find.png'
import { useState, useEffect } from 'react';
import Item from './Item';
const ThirdScreen = ( {navigation} ) => {

    const [data, setData] = useState('')
    const [cartItem, setCartItem] = useState([])

    const img = [
        item01,
        item02,
        item03,
        item04
    ]


    useEffect(()=>{
        fetch('https://670fddb0a85f4164ef2c40a7.mockapi.io/drink/drinkItem')
            .then(res=>res.json()).then(data=>{
                const dataWithImage = data.map((item, index) => ({
                    ...item,
                    image: img[index % img.length],
                    quantity: 0
                  }));
                  setData(dataWithImage);
            })
            .catch((error) => console.error(error));
    },[])

    const updateCart = (item, quantity) => {
        const updateitem = [...cartItem]
        const itemIndex = updateitem.findIndex(cartItem => cartItem.id === item.id)
        if(quantity > 0) {
            if(itemIndex !== -1){
                updateitem[itemIndex].quantity = quantity
            } else {
                updateitem.push({...item, quantity})
            }
        } else{
            updateitem.splice(itemIndex, 1)
        }
        setCartItem(updateitem)
    }


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
                <Image source={back}  style={{width: 50, height: 50, marginRight: 50}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 24}}>Drinks</Text>
            <Image source={find} style={{width: 30, height: 30,marginLeft: 150}}/>
        </View>
        <FlatList 
            data={data}
            renderItem={({item})=> (<Item 
                image={item.image}
                name={item.name}
                price={item.price}
                updateCart={(quantity) => updateCart(item,quantity)}

            />)}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourScreen', { cartItem })}>
            <Text style={{fontSize: 18, color: '#fff'}}>GO TO CART</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#F3F4F6'
    },
    header: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
    },
    button:{
        width: 300,
        height: 50, 
        backgroundColor: '#EFB034', 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        marginBottom: 50
    }
})