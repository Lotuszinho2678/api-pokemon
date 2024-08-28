import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        alignItems:'center',
      },
    cardPersonagem: {
        width: '40%',
        backgroundColor: '#212121',
        borderRadius: 10,
        height: 280,
        alignItems:'center',
        justifyContent:'space-between',
        padding: 20,
        elevation: 5,
        marginTop: 10
      },
      tituloCard:{
        fontSize:13,
        padding: 1,
        color:'#fefae0',
        fontWeight: 'bold'
      },
      textoCard: {
        fontSize: 13,
        marginRight: 15,
        marginTop: 5,
        color: '#fefae0',
        padding: 1,
        justifyContent: 'flex-end'
      },
      imagemCard: {
        width:70,
        height: 70,
        marginRight: 10,
        borderRadius: 10
      }
    })

export default estilo;