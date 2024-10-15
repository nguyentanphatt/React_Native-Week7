import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import yellow_donut from '../assets/yellow_donut.png'
import red_donut from '../assets/red_donut.png'
import green_donut from '../assets/green_donut.png'
import pink_donut from '../assets/pink_donut.png'
import { useState, useEffect } from 'react';
import Item from './Item';
export default function FirstScreen( {navigation} ) {

  const [data, setData] = useState([])
  const [type, setType] = useState('Donut')

  const img = [
    yellow_donut,
    pink_donut,
    green_donut,
    red_donut
  ]

  useEffect(() => {
    fetch('https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/donut')
      .then((res) => res.json())
      .then((data) => {
        const dataWithImage = data.map((item, index) => ({
          ...item,
          image: img[index % img.length]
        }));
        setData(dataWithImage);
      })
      .catch((error) => console.error(error));
  }, []);
  
  const filterData = data.filter(item => {
    if(type === 'Donut') return true
    return item.title === type
  })
  return (
    <View style={styles.container}>
      <Text>Welcome, Jala!</Text>
      <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 20}}>Choice you Best food</Text>
      <TextInput placeholder='Search food' style={styles.search}/>
      <View style={styles.filter}>
        <TouchableOpacity style={[styles.filterContainer, type === 'Donut' && styles.selectedButton]}
          onPress={() => setType('Donut')}
        >
          <Text>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterContainer, type === 'Pink Donut' && styles.selectedButton]}
          onPress={() => setType('Pink Donut')}
        >
          <Text>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterContainer, type === 'Floating Donut' && styles.selectedButton]}
          onPress={() => setType('Floating Donut')}
        >
          <Text>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={filterData}
        renderItem={({ item }) => (
          <Item
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            navigation = {navigation}
          />
        )}
        keyExtractor={data.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 10,
    flex: 1
  },
  search: {
    width: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 50,
    borderColor: '#C4C4C4',
    marginBottom: 20,
    padding: 10
  },
  filter:{
    display: 'flex',
    flexDirection: 'row',
  },
  filterContainer:{
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedButton: {
    backgroundColor: '#FFB300',
  },
});
