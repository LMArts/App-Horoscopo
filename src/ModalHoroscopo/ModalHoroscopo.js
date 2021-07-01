import React from 'react';
import { View, Image } from 'react-native';
import { Texto } from '../Themes/Styled';
import { ModalHoroscopoCss } from './ModalHoroscopoCss';

export function ModalHoroscopo(props) {

    return (
        <View style={ModalHoroscopoCss.container}> 
            <View style={ModalHoroscopoCss.subContainer}>
                <Image source={props.dado.image} />
                <View style={ModalHoroscopoCss.containerTitulo}>
                    <Texto bold={'bold'} size={'18px'}>{props.dado.sign}</Texto>
                    <Texto size={'12px'}>{props.dado.data}</Texto>
                </View>
                <View style={ModalHoroscopoCss.containerDescription}>
                    <Texto size={'13px'}>{props.dado.description}</Texto>
                </View>
                <View style={{flex: 4}}>
                    <Image resizeMode={'center'} source={require('../../assets/Illustrations/arte.png')} />
                </View>
            </View>
        </View>
    );
}