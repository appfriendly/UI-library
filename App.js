import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Animated, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import React, {useState, useRef} from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';

export default function App() {
  const [phone, setPhone] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Поле должно быть заполнено');
  const [phoneRight, setPhoneRight] = useState(false);
  const [phoneRightText, setPhoneRightText] = useState('Все верно!');
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

  const blurHandler = () => {
    setPhoneDirty(true)
    if(phone == ''){
      setPhoneRight(false)
      setPhoneError('Поле должно быть заполнено')
    }else if(!re.test(String(phone).toLowerCase())){
      setPhoneError('Некорректный номер')
      setPhoneRight(false)
    }
  }

  let GreenOrRed = {
    transition:'3s',
  };

  if(phoneDirty == true && phoneRight == false){
    GreenOrRed = {borderColor: '#FF3D31'}
  } else if(phoneRight == true){
    GreenOrRed = {borderColor: '#00FF66'}
  }

  const phoneHandler = (e) =>{
    if(!re.test(String(phone).toLowerCase())){
      setPhoneError('Некорректный номер')
      setPhoneRight(false)
    }else if({phone} == ''){
      setPhoneError('Поле должно быть заполнено')
      setPhoneRight(false)
    }else{
      setPhoneError('')
      setPhoneRight(true)
    }
  }

  return (

    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        

    <View style={styles.container}>
       
        <View style={[styles.SectionStyle, GreenOrRed]}>
 
        <Image source={require('./assets/phone.png')} style={styles.ImageStyle} />

        <MaskInput
          value={phone}
          name = 'mask'
          style={{flex:1, paddingLeft: 6, fontSize:17}}
          onChange={e=>phoneHandler(e)}
          onChangeText={(masked, unmasked) => {
            setPhone(masked); 
            //console.log(masked);
            console.log(unmasked);
          }}
          maxLength={17}
          onBlur={e => blurHandler(e)}
          keyboardType='phone-pad'
          mask={['+', /\d/ ,'(' ,/\d/, /\d/, /\d/, ')', ' ' ,/\d/, /\d/, /\d/, '-' ,/\d/, /\d/, '-' ,/\d/,/\d/]}   
          placeholder = 'Введите номер телефона' 
          />
 
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
    fontSize: 10,
    transition:'color .3s' 
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
    marginBottom: 3,
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 15,
    height: 22,
    width: 22,
    resizeMode : 'stretch',
    alignItems: 'center',
},
});
