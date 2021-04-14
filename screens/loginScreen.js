import * as React from 'react';
import { Alert,View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import WriteStory from '../screens/WriteStoryScreen'; 

export default class loginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    login =async(email,password)=>{
        
          if (email && password){
              try{
                  const response = await firebase.auth().signInWithEmailAndPassword(email,password);
                  if(response){
                      this.props.navigation.navigate("WriteStory")
                  }
              }catch(error){
                  switch(error.code){
                      case 'auth/user-not-found':Alert.alert("User Not Found")
                      break;
                      case 'auth/invalid-email':Alert.alert("Incorrect Email")
                      break;
                  }
              }
          }else{
              Alert.alert("Plz Enter Valid EmailId and Password");
          }
           
    }
    render(){
        return(
            <View style={{margin:10}}>
                    <TextInput 
                    style={styles.e}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    onChangeText={text=>{this.setState({email:text})} }
                    value={this.state.email}
                    />

                    <TextInput 
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    onChangeText={text=>{this.setState({password:text})}}
                    />
                <View>
                    <TouchableOpacity onPress={()=>{this.login(this.state.email,this.state.password)}}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    e:{
        color:'grey',
        marginLeft:200,
        backgroundColor:'grey'
    }

})