import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import back from '../assets/back.png'
import find from '../assets/find.png'

const FourScreen = ( {route, navigation} ) => {
    const {cartItem} = route.params

    const total = () => {
        return cartItem.reduce((total, item) => total + item.price*item.quantity, 0)
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                <Image source={back}  style={{width: 50, height: 50, marginRight: 50}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 24}}>Drinks</Text>
            <Image source={find} style={{width: 30, height: 30,marginLeft: 150}}/>
        </View>
        <View style={styles.card1}>
            <View>
                <Text style={styles.text}>CAFE DELIVERY</Text>
                <Text style={styles.text}>Order #18</Text>
            </View>
            <Text style={styles.text}>$5</Text>
        </View>
        <View style={styles.card2}>
            <View>
                <Text style={styles.text}>CAFE DELIVERY</Text>
                <Text style={styles.text}>Order #18</Text>
            </View>
            <Text style={styles.text}>${total()}</Text>
        </View>
        <FlatList 
            data={cartItem}
            renderItem={({item}) => (
                <View style={styles.itemContainer}>
                    <View style={{display: 'flex', flexDirection: 'row'}}> 
                        <Image source={item.image} style={{width: 50, height: 50}}/>
                        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10}}>
                            <Text style={{fontSize: 18, fontWeight: '700'}}>{item.name}</Text>
                            <Text>${item.price}</Text>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.btn} >
                            <Text style={{fontSize: 16, color: '#fff'}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ width: 20, marginLeft: 10}}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{fontSize: 16, color: '#fff'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 18, color: '#fff'}}>PAY NOW</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FourScreen

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
    text:{
        fontWeight: '700',
        fontSize: 18,
        color: '#fff'
    },
    card1:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: 350, marginLeft: 10, 
        backgroundColor: '#00BDD6',
        height: 100,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20
    },
    card2:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: 350, marginLeft: 10, 
        backgroundColor: '#8353E2',
        height: 100,
        padding: 10,
        borderRadius: 20
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
    },
    itemContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 20
    },
    btn:{
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#1DD75B',
        alignItems: 'center',
        justifyContent: 'center'
    }
})