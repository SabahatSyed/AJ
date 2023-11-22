import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import BackButtonSvg from '../../assets/backButton.svg'
import BackButtonWhiteSvg from '../../assets/back.svg'
import { useNavigation } from '@react-navigation/native';

export default function HederRight({ color }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            {
                color === 'white' ? <BackButtonWhiteSvg /> : <BackButtonSvg />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        marginRight: 20,
        padding: 10,
    }
})