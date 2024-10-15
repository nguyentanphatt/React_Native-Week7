import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SecondScreen( {navigation, route}) {
    const {image, title, description, price} = route.params;
  return (
    <View style={styles.container}>
        <Image source={image} style={{width: 200, height: 200, marginLeft: 80}}/>
        <Text style={{fontSize: 18, fontWeight: '700'}}>{title}</Text>
        <View style={styles.info}>
            <Text>{description}</Text>
            <Text style={{fontSize: 18, fontWeight: '700', marginRight: 10}}>${price.toFixed(2)}</Text>
        </View>
        <Text>Delivery in</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>30 min</Text>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 20}}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 18,fontWeight: '700', marginRight: 10}}>1</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 20}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Restaurants Info</Text>
        <Text>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
        <TouchableOpacity style={styles.add}>
            <Text style={{fontSize: 18,fontWeight: '700', color: '#fff'}}>Add to cart</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'center',
        flex: 1
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    quantityContainer:{
        display: 'flex',
        flexDirection: 'row'
    },
    button:{
        width: 30,
        height: 30,
        backgroundColor: '#FFB300',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 10
    },
    add:{
        width: 370,
        height: 50,
        backgroundColor: '#FFB300',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 10,
        marginTop: 50
    }
})