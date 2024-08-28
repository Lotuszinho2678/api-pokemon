import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    cardTarefa: {
        marginTop: 50,
        width: '100%',
        height: 73,    
        alignItems:'center',
        borderColor: '#fefae0',
        borderWidth: 2,
        flexDirection: 'row',
        shadowColor: '#f7f7f7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#f7f7f7'
      },
      imagemCard: {
        marginLeft: 160,
        width: 70,
        height: 70,
        borderRadius: 10,
      }
    })

export default estilo;