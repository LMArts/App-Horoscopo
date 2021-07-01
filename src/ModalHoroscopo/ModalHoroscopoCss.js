import { StyleSheet } from "react-native";
import { theme } from '../Themes/Theme';

export const ModalHoroscopoCss = StyleSheet.create({
    container:{
        flex: 9, width: '90%', alignItems: 'center'
    },
    subContainer:{
        flex: 1, alignItems: 'center', width: '100%'
    },
    containerTitulo:{
        flex: 1, marginVertical: 10, alignItems: 'center'
    },
    containerDescription:{
        flex: 2, paddingHorizontal: 10
    },
    containerButton:{
        flex: 1, marginBottom: 10, width: '90%', justifyContent: 'center'
    },
    button:{
        backgroundColor: theme.colors.black, padding: 10, borderRadius: 50
    }
});