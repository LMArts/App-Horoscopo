import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import { signos } from '../Components/Recursos/Signos';
import config from '../../assets/Config/config';
import { HomeCss } from './HomeCss';
import { ContainerImage, Texto } from '../Themes/Styled';
import { ModalHoroscopo } from '../ModalHoroscopo/ModalHoroscopo';
import { Header } from '../Components/Header/Header';
import { ModalHoroscopoCss } from '../ModalHoroscopo/ModalHoroscopoCss';
import { theme } from '../Themes/Theme';

export function Home() {
    
    const [horoscopo, setHoroscopo] = useState([]);
    const dataAtual = new Date().toISOString().slice(0, 10);
    const dataFormatada = dataAtual.split('-').reverse().join('/');

    useEffect(() => {
        hideModal()
        fetch(config.url + `horoscope/test?dt=${dataAtual}`)
            .then((response) => response.json())
            .then((json) => setHoroscopo(json.result[0].horoscopes))
            .catch((error) => console.error(error))
    }, []);

    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [dados, setDados] = useState(null);

    const verifica = (text) => {
        horoscopo.map(function (a, b) { 
            if (a.sign === text) {
                signos.map(function(x,y){
                    if (x.signo === text) setDados({ data: dataFormatada, sign: a.sign, description: a.description, image: x.image, bg: x.backgroundimage })
                })
            }
        })
        showModal();
    }

    return (
        <View style={HomeCss.container}>
            <StatusBar/>
            <Header/>
            <View style={HomeCss.containerText}>
                <Text style={{ fontSize: 11 }}>Escolha um signo e veja o horóscopo do dia!</Text>
            </View>
            <View style={HomeCss.containerSignos}>
                {signos.map(item =>
                    <TouchableOpacity onPress={() => verifica(item.signo)} style={HomeCss.button} key={item.id} activeOpacity={0.5}>
                        <ContainerImage color={item.color}>
                            <Image resizeMode={'center'} source={item.image} />
                        </ContainerImage>
                        <Texto size={'12px'}>{item.signo}</Texto>
                    </TouchableOpacity>
                )}
            </View>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={HomeCss.modal}>
                        {dados != null ?
                            <ImageBackground style={HomeCss.containerModal} source={dados.bg}>
                                <View style={HomeCss.containerContent}>
                                    <View style={HomeCss.containerButtonClose}>
                                        <TouchableOpacity onPress={hideModal}>
                                            <Image resizeMode={'center'} source={require('../../assets/Icons/General/close.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <ModalHoroscopo dado={dados}/>
                                    <View style={ModalHoroscopoCss.containerButton}>
                                        <TouchableOpacity onPress={hideModal} activeOpacity={0.7} style={ModalHoroscopoCss.button}>
                                            <Texto size={'13px'} color={theme.colors.default}>Veja o horóscopo de outros signos!</Texto>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        : <></>}
                    </Modal>
                </Portal>
            </Provider>
        </View>
    );
}