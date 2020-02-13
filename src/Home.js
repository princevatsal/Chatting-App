

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Home extends React.Component {
  state = {
    name2: '',
    aaaaa:'love'
  };
  render(){
    return(
      <View style={styles.container}>
        <Text style={[styles.label,{marginTop:40}]} >
          Enter Your Name
        </Text>
        <TextInput 
        placeholder='Priyansh'
        style={styles.textInput}
        onChangeText={(text)=>{
          this.setState({
            name2:text,
            aaaaa:'sove'
          })
        }}
        value={this.state.name}
        />
        <TouchableOpacity 
        onPress={()=>{
          console.log('username',this.state)
          Actions.chat({
            name2:this.state.name2,
            llllllllll:this.state.aaaaa
          })
        }}>
          <Text style={styles.label}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});