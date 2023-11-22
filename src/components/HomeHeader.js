import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import AFLLogo from "../svgComponents/AFLLogoHeader";
import HeaderRight from './HeaderRight';

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.logoContainer} onPress={() => {}}> */}
                <AFLLogo />
            {/* </TouchableOpacity> */}
            <HeaderRight/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 85,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    logoContainer:{
        display:'flex',
        justifyContent:'center'
    }
})