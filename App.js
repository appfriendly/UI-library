import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableWithoutFeedback, TextInput, Keyboard, Text} from 'react-native';
import React, {useState, useRef} from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Поле должно быть заполнено');
  const [phoneRight, setPhoneRight] = useState(false);
  const [phoneRightText, setPhoneRightText] = useState('Все верно!');
  const [math, setMath] = useState(0);

  const blurHandler = () => {
    setPhoneDirty(true)
    if(phone == ''){
      setPhoneRight(false)
      setPhoneError('Поле должно быть заполнено')
    }
  }

  let GreenOrRed = {
    
  };

  if(phoneDirty == true && phoneRight == false){
    GreenOrRed = {borderColor: '#FF3D31'}
  } else if(phoneRight == true){
    GreenOrRed = {borderColor: '#00FF66'}
  }

  return (

    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        

    <View style={styles.container}>
       
        <View style={[styles.SectionStyle, GreenOrRed]}>

        <TextInput
          value={phone}
          style={{flex:1, paddingLeft: 15, fontSize:17}}
          onChangeText={(phone) => {
            setPhone(phone); 
            setMath(phone.length)
            if(phone.includes(' ')){
              setPhoneDirty(true)
              setPhoneError('HSHSHSHSH')
              setPhoneRight(false)
            }else if(phone == ''){
              setPhoneRight(false)
              setPhoneError('Поле должно быть заполнено')
            }else{
              setPhoneError('')
              setPhoneRight(true)
              setPhoneDirty(false)
            }
          }}
          maxLength={15}
          onBlur={e => blurHandler(e)}
          placeholder = 'Введите текст' 
          />

          <Text style = {{paddingRight: 15, fontSize: 13, color: '#707070'}}>
            {math}/15
          </Text>
 
        </View>
        
          {(phoneDirty && phoneError) && 
          <View style={{flexDirection:'row', alignItems:'center', marginLeft: 10}}>
            <Image source={require('./assets/Error.png')} style={{width:13, height:13, resizeMode:'contain'}}/>
            <Text style={styles.error}>{phoneError}</Text>
          </View>}

          {(phoneRight && phoneRightText) && 
          <View style={{flexDirection:'row', alignItems:'center', marginLeft: 10}}>
            
          </View>}

        <StatusBar style="auto" />
 
      </View>
      

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    margin: 10,
  },

  InputRight: {
    borderColor: '#00FF66',
  },

  right: {
    color: '#00FF66',
    marginLeft: 5,
    fontSize: 12
  },

  error: {
    color: '#FF3D31',
    marginLeft: 2,
    fontSize: 10
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 50,
    borderRadius: 10 ,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 15,
    height: 20,
    width: 20,
    resizeMode : 'stretch',
    alignItems: 'center',
},
});
