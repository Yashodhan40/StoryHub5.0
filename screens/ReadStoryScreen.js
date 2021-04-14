import * as React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import db from '../config';
import {SearchBar,Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allStories:[],
      search:'',
      dataSource:[]
    }
  }
  componentDidMount(){
    this.retrieveStories()
  }
  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("Story")
        .get().then((querySnapshot)=> {//it is the parameter passed. It is an inbuilt Object. it contains the result of an query. 
          querySnapshot.forEach((doc)=> {// forEach(); is like map(). It will see everything that is inside querySnapshot. It will read the entire story and 'doc' parameter is passed so the allStories gets pushed into the empty array.
          //ForEach() reads stroy works word by word.
              // doc.data() is never undefined for query doc snapshots
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
    }
    catch (error) {
      console.log(error);
    }
  };
  searchFilter=async(text)=>{
           //passing the inserted text in textinput
           const newData = this.state.allStories.filter((item)=>{
             //applying filter for the inserted text
             const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
             const textData = text.toUpperCase();
             return itemDat.indexOf(textData) > -1
             });
             this.setState({
               //setting the filtered newData on DataSource
               //After seeing the data it will automatically re-render the view
               dataSource:newData,
               search:text
             })
  }
  render(){
    return(
      <View style ={styles.container}>
         <Header 
              backgroundColor = {'pink'}
              centerComponent = {{
                  text : 'Bed Time Stories',
                  style : { color: 'white', fontSize: 20}
              }}
          />
        <View styles ={{height:20,width:'100%'}}>
            <SearchBar
            placeholder="Type Here..."
            onChangeText={text => this.searchFilter(text)}
            onClear={text => this.searchFilter('')}
            value={this.state.search}
          />
        </View>
        
        <FlatList
              data={this.state.search === "" ?  this.state.allStories: this.state.dataSource}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text>  Title: {item.title}</Text>
                  <Text>  Author : {item.author}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              /> 
        
        
        
      </View>  
    );      
  }
}


const styles = StyleSheet.create({
container: {
  backgroundColor: '#fff',
},
item: {
  backgroundColor: 'pink',
  padding:10,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},
itemContainer: {
  height: 80,
  width:'100%',
  borderWidth: 2,
  borderColor: 'pink',
  justifyContent:'center',
  alignSelf: 'center',
}
})