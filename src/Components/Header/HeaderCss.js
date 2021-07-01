import { StyleSheet } from "react-native";
import { theme } from '../../Themes/Theme';

export const HeaderCss = StyleSheet.create({
    containerImage:{
        width: '100%', height: 85, justifyContent: "flex-end", alignItems: 'center'
    },
    containerContent:{
        width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 20
    },
    left:{
        flexDirection: 'row', width: '65%'
    },
    right:{
        flexDirection: 'row', width: '35%', justifyContent: 'space-between', alignItems: 'center'
    },
    icons:{
        alignItems: 'center', flexDirection: 'row'
    }
});