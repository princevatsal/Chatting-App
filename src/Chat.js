import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat'
import Backend from './Backend'

export default class App extends React.Component {
    state={
        messages:[],
    }
     Backendobj= new Backend()
  render() {
    // console.log('user rendered',this.state.messages)
    return (
         <GiftedChat
         messages={this.state.messages}
         onSend={(message)=>{this.Backendobj.sendMessage(message)}}
         user={{_id:this.Backendobj.getUid(),name:this.props.name2}}
         />
    );
  }
  componentDidMount(){
    this.Backendobj.loadMessages((message)=>{
        this.setState((previousState)=>{
            return{
                messages:GiftedChat.append(previousState.messages,message)
            }
        })
    })
  }
  componentWillUnmount() {
    this.Backendobj.closeChat();
  }
}