import { Image, ImageProps } from "react-native";

import { styles } from "./styles";

type Props = ImageProps

export function LogoH(props : Props){
    return (
        <Image 
        source={require("../../../assets/logoArmarion.png")} 
        style={styles.logoH} 
        {...props}/>
    )
}
export function LogoL(props : Props){
    return(
        <Image 
        source={require("../../../assets/logoArmarionB.png")} 
        style={styles.logoL}
        {...props}/>
    )
}