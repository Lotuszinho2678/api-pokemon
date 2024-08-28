import {Text, View, Image} from 'react-native'
import estilo from './style'

export default function Card({porcentagem, titulo, imagem, descricao}){
    return(
    <>
        <View style={eststilo.imagemCard} source={{ uri:imagem}} />
        <View style={{ilo.cardTarefa}>
        <Image style={e  marginLeft: 1,width:300 }}>
        <Text style={estilo.textoCard}>{descricao}</Text>
        </View>
        </View>
    </>
)}
