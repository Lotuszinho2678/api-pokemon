import {Text, View, TouchableOpacity, TextInput} from 'react-native'
import estilo from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SearchBar(){
    return(
    <>
    <View style={estilo.asembler}>
        <View style={estilo.Main}>
                <TextInput placeholder='Pesquise pelo seu destino' style={estilo.Input}></TextInput>
        </View>
        <View style={estilo.buttonP}>
            <TouchableOpacity>
                <AntDesign style={estilo.icon} name='search1' size={25}/>
            </TouchableOpacity>
        </View>
    </View>
    </>
)}
