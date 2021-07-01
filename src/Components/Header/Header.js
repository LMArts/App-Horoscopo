import React from 'react';
import { View, ImageBackground, Image} from 'react-native';
import {Texto} from '../../Themes/Styled';
import { HeaderCss } from './HeaderCss';
export function Header(props) {

    return (
        <ImageBackground borderBottomLeftRadius={30} borderBottomRightRadius={30} style={HeaderCss.containerImage} source={require('../../../assets/Illustrations/header.png')}>
            <View style={HeaderCss.containerContent}>
                <View style={HeaderCss.left}>
                    <Image resizeMode={'center'} source={require('../../../assets/Icons/General/flecha.png')} />
                    <Texto>Horóscopo</Texto>
                </View>
                <View style={HeaderCss.right}>
                    <Texto>RESOLVA</Texto>
                    <View style={HeaderCss.icons}>
                        <Image resizeMode={'center'} source={require('../../../assets/Icons/General/perfil.png')} />
                        <Image resizeMode={'center'} source={require('../../../assets/Icons/General/pontos.png')} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}