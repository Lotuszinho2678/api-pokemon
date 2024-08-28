import {Text, View, Image, ImageBackground} from 'react-native'
import estilo from './style';
import SearchBar from '../SearchBar';

export default function Card({imagem, titulo}){
    return(
    <>
        <ImageBackground style={estilo.Banner} source={{ uri:imagem}}>
            <SearchBar></SearchBar>
            <Text style={estilo.titulo}>{titulo}</Text>
        </ImageBackground>
        
    </>
)}