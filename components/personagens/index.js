import {Text, View, Image} from 'react-native'
import estilo from './style'

export default function Personagens({porcentagem, titulo, imagem, descricao}){
    return(
    <>
    <View style={estilo.container}>
        <View style={estilo.cardPersonagem}>
        <Text style={estilo.tituloCard}>{titulo}</Text>
        <Image style={estilo.imagemCard} source={{ uri:imagem}} />
        <Text style={estilo.textoCard}>{descricao}</Text>
        <View style={{  marginLeft: 1,width:300 }}>
        </View>
        </View>
    </View>    
    </>
)}
