import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import jewel from '../assets/jewel.png'
import javasti from '../assets/javasti.png'
import kitanda from '../assets/kitanda.jpg'
import back from '../assets/back.png'
import find from '../assets/find.png'
import yes from '../assets/yes.png'
import location from '../assets/location.png'
import time from '../assets/time.png'
import lock from '../assets/lock.png'
const SecondScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
                <Image source={back}  style={{width: 50, height: 50, marginRight: 50}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 24}}>Shop Near Me</Text>
            <Image source={find} style={{width: 30, height: 30,marginLeft: 50}}/>
        </View>
        <View style={styles.shopContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                <Image source={kitanda} style={{width: 330, height: 100, borderRadius: 10, marginBottom: 10}}/>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Image source={yes} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#1DD75B'}}>Accepting Orders</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={time} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#DE3B40', marginLeft: 3}}>5-10 minutes</Text>
                    </View>
                    <Image source={location} style={{width: 15, height: 20, marginLeft: 25}}/>
                </View>
                <Text style={{fontSize: 18, fontWeight: '700', marginLeft: 10}}>Kitanda Espresso & Acai-U District</Text>
                <Text style={{fontSize: 16, color: '#171A1F', marginLeft: 10}}>1121 NE 45 St</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.shopContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                <Image source={jewel} style={{width: 330, height: 100, borderRadius: 10, marginBottom: 10}}/>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Image source={lock} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#DE3B40'}}>Tempory Unavailable</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={time} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#DE3B40', marginLeft: 3}}>10-15 minutes</Text>
                    </View>
                    <Image source={location} style={{width: 15, height: 20}}/>
                </View>
                <Text style={{fontSize: 18, fontWeight: '700', marginLeft: 10}}>Jewel Box Cafe</Text>
                <Text style={{fontSize: 16, color: '#171A1F', marginLeft: 10}}>1121 NE 45 St</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.shopContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                <Image source={javasti} style={{width: 330, height: 100, borderRadius: 10, marginBottom: 10}}/>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Image source={lock} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#DE3B40'}}>Tempory Unavailable</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={time} style={{width: 20, height: 20}}/>
                        <Text style={{color: '#DE3B40', marginLeft: 3}}>15-20 minutes</Text>
                    </View>
                    <Image source={location} style={{width: 15, height: 20}}/>
                </View>
                <Text style={{fontSize: 18, fontWeight: '700', marginLeft: 10}}>Jewel Box Cafe</Text>
                <Text style={{fontSize: 16, color: '#171A1F', marginLeft: 10}}>1121 NE 45 St</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    shopContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        width: 330
    },
    infoContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#F3F4F6',
        padding: 5
    },
})