import * as React from 'react'
import { Text, StyleSheet, TouchableHighlight, Image, View } from "react-native";

export const FButton = (props) => {
    const [BtnTitleColor, setBtnTitleColor] = React.useState(null);
    const [BtnBackgroundColor, setBtnBackgroundColor] = React.useState(null);
    const [BtnBackgroundClick, setBtnBackgroundClick] = React.useState(null);
    const [isPress, setIsPress] = React.useState(false);
    const [BtnWidth, setBtnWidth] = React.useState('90%');

    React.useEffect(() => { // Button colors
        if (props.background === 'white') {
            setBtnBackgroundColor('#fff');
            setBtnTitleColor('#111111');
            setBtnBackgroundClick('#EFEFEF');
        } if (props.background === 'black') {
            setBtnBackgroundColor('#111111'); // background
            setBtnTitleColor('#fff'); // title color
            setBtnBackgroundClick('#323232'); // click background
        } if (props.background === 'green') {
            setBtnBackgroundColor('#00FF66');
            setBtnTitleColor('#fff');
            setBtnBackgroundClick('#00E85D')
        } if (props.background === 'red') {
            setBtnBackgroundColor('#FF3D31');
            setBtnTitleColor('#fff');
            setBtnBackgroundClick('#DD3429')
        } if (props.background === 'blue') {
            setBtnBackgroundColor('#558FFF');
            setBtnTitleColor('#fff');
            setBtnBackgroundClick('#2B73FF');
        }
    })
    React.useEffect(() => {
        if (props.width > 0)  {
            setBtnWidth(props.width + '%');
        } else {
            setBtnWidth('90%')
        }
    })


    const styles = StyleSheet.create({ // button styles
        title: {
            color: BtnTitleColor,
            fontSize: 32,
            textAlign: 'left'
        },
        btnNormal: {
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: BtnWidth,
            backgroundColor: BtnBackgroundColor,
            paddingHorizontal: 'auto',
            textAlign: 'center',
            paddingVertical: 8,
            borderRadius: 18,
            marginBottom: 20,
          },
        btnPress: {
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: BtnWidth,
            backgroundColor: BtnBackgroundColor,
            paddingHorizontal: 'auto',
            paddingVertical: 8,
            borderRadius: 18,
            marginBottom: 20
        }
    });
    
    const touchProps = { // Функция нажатия на кнопку
        activeOpacity: 1,
        underlayColor: BtnBackgroundClick,
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: props.function,
    };
    return (
        <TouchableHighlight {...touchProps}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Image source={require(`../../../assets/icon.png`)} style={{
                    width: 24,
                    height: 24
                }}/>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </TouchableHighlight>
    )
}



