import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    cardTarefa: {
        width: '90%',
        height: 125,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        padding: 20,
        marginLeft: 1,
        elevation: 5,
      },
      textoCard: {
        fontSize: 15,
        marginRight: 15,
        marginTop: 5,
        color: '#fefae0',
        padding: 1
      },
      imagemCard: {
        width:70,
        height: 70,
        marginRight: 10,
        borderRadius: 10
      }
    })

export default estilo;