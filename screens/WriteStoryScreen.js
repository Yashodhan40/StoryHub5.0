import * as React from 'react';
import {
Text,
View,
StyleSheet,
TouchableOpacity,
ToastAndroid,
KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';

export default class WriteStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textEntered: '',
      title: '',
      author: '',
      storySaved: true,
      submitMessage: '',
    };
  }
  
  submitButton =()=> {
    db.collection("Story").add({
      Title:this.state.title,
      Author:this.state.author,
      Story:this.state.textEntered
    })
    this.setState({
      author:'',
      title:'',
      textEntered:''
    })
    ToastAndroid.show("Your Story Has Been Submitted",ToastAndroid.SHORT);
  }

  render() {

    return (
      <KeyboardAvoidingView behavior='padding'enabled>
          <View>

        <TouchableOpacity>
          <Text style={styles.body}>StoryHub</Text>
        </TouchableOpacity>

        <TextInput
          value={this.state.title}
          placeholder="Title"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          style={styles.t}
          placeholderTextColor="black"
        />

        <TextInput
          value={this.state.author}
          placeholder="Author"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          style={styles.a}
          placeholderTextColor="black"
        />
        
        <TextInput
          value={this.state.textEntered}
          placeholder="Story"
          onChangeText={(text) => {
            this.setState({
              textEntered: text,
            });
          }}
          placeholderTextColor="black"
          multiline={true}
          style={styles.story}
        />
        
          <View>
          <TouchableOpacity onPress={this.submitButton}>
            <Text
              style={{
                color: '#AF4228',
                alignSelf: 'center',
                backgroundColor: 'yellow',
                borderRadius: 2,
                borderColor: 'black',
                borderWidth: 2,
                marginTop: 20,
                padding: 10,
                fontWeight: 'bold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'pink',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    fontSize: 25,
    padding: 10,
  },
  t: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 2,
    marginTop: 30,
    padding: 10,
  },
  a: {
    padding: 5,
    marginTop: 30,
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 2,
  },
  story: {
    paddingBottom: 190,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    marginTop: 20,
  },
});
