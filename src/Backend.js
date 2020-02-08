import firebase from 'firebase'
class Backend{
    uid=''
    messageRef=null
    constructor(){
        console.log('constructor caled')
        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig)
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setUid(user.uid)
                console.log('login sucess ',user.uid)
            }
            else{
                firebase.auth().signInAnonymously()
                .then(()=>{console.log('loged',user.uid)})
                .catch((error)=>{
                    alert(error.message)
                })
            }
        })
    }
setUid(value){
    this.uid=value
}
getUid() {
    return this.uid;
  }
loadMessages(callback){
    this.messageRef=firebase.database().ref('chatapp-d9972')
    this.messageRef.off()
    const onRecieve=(data)=>{
        const message=data.val();
        callback({
            _id:data.key,
            text:message.text,
            createdAt:new Date(message.createdAt),
            user:{
                _id:message.user_id,
                name:message.user.name
            }
        })
    }
    this.messageRef.limitToLast(20).on('child_added',onRecieve)
}
sendMessage(message){
    for(let i=0;i<message.length;i++){
        this.messageRef.push({
            text:message[i].text,
            user:message[i].user,
            createdAt:firebase.database.ServerValue.TIMESTAMP,
        })
    }
}
closeChat(){
    if(this.messageRef){
        this.messageRef.off()
    }
}
}

var firebaseConfig = {
    apiKey: "AIzaSyDz7FZILs0NI8Ci1Al5fXcw2Gex1-ayX6I",
    authDomain: "chatapp-d9972.firebaseapp.com",
    databaseURL: "https://chatapp-d9972.firebaseio.com",
    projectId: "chatapp-d9972",
    storageBucket: "chatapp-d9972.appspot.com",
    messagingSenderId: "617937314915",
    appId: "1:617937314915:web:1aa3ce4936774b58acc456",
    measurementId: "G-NX8N65R38M"
  };
export default new Backend()