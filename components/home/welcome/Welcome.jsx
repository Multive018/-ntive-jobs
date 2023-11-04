import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from "expo-router";

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes =["Full-time", "Part-time", "Contactor"];

export default function Welcome() {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState ('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}> 
          <TextInput 
            style={styles.searchInput} 
            value="" 
            onChange={() =>{}} 
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}  // search icon that when clicked will search for the entered value
            resizeMode="contain" 
             style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>  
        <FlatList   //for the jobs
          data={jobTypes}  //pass the job types to flatlist
          renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.tab(activeJobType, item)} 
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}
          >
            <Text style={styles.tabText(activeJobType, item)}> {item} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}
