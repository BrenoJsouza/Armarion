import {Text, TouchableOpacity , TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps 

export function Button1({...rest}: Props){
    return(
        <TouchableOpacity activeOpacity={0.3}  style={styles.Button} {...rest}>
            <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
    )
}
export function Button2({...rest}: Props){
    return(
        <TouchableOpacity activeOpacity={0.3}  style={styles.ButtonC}>
            <Text style={styles.txtLogin}>Criar nova Conta</Text>
        </TouchableOpacity>
    )
}   