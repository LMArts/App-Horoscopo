import { StyleSheet } from "react-native";
import { theme } from '../Themes/Theme';
import { Dimensions } from 'react-native';

export const HomeCss= StyleSheet.create({
    modal:{
        backgroundColor: '#fff', marginTop: -40
    },
    containerText:{
        width: '85%', marginTop: 15, marginBottom: 19
    },
    scroll:{
      backgroundColor: theme.colors.default
    },
    container:{
        flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.default
    },
    containerSignos:{
        flex: 1, width: '90%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'
    },
    button:{
        width: '30%', marginVertical: 10, alignItems: 'center', justifyContent: 'center'
    },
    containerModal:{
        width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center', justifyContent: 'center'
    },
    containerContent:{
        flex: 1, width: '100%', alignItems: 'center'
    },
    containerButtonClose:{
        flex: 1, width: '90%', marginTop: 10, alignItems: 'flex-end'
    }
});