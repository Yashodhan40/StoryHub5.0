
import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen'; 
import loginScreen from './screens/loginScreen';

export default class App extends React.Component{
     render(){
           return (
                  
                     <AppContainer/>
                     
                  
            );
      }
}


const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteStory},
  Read:{screen:ReadStory},

},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      console.log(routeName);
      if(routeName==="Write"){
        return(
        <Image source={require("./assets/write.png")}
        style={{width:40,height:40}}/>
        )
      }else if(routeName==="Read"){
        return(
          <Image source={require("./assets/read.png")}
          style={{width:40,height:40}}/>
        )
        
      }
    }
  })
}
);
const switchNavigator = createSwitchNavigator({
  login:{screen:loginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

