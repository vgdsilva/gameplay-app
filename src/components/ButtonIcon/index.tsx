import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'
import { styles  } from './style'
import DiscordImg from '../../assets/discord.png';
import { VendorShorthandPropertiesHyphen } from 'csstype';

// Definindo uma propriedade para o botão
// propriedades com ? são opcionais, sem ? é obrigatorio 
type Props = {
    title: string;
}


export function ButtonIcon({ title}  : Props){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={.7}>
            <View style={styles.iconWraper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}