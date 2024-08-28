import {Text, View} from 'react-native'
import estilo from './style'
import Card from '../Card'

export default function Header(){
    return(
        <>
                <Text style={estilo.titulo}>Movie: Super Size Me</Text>
                <Text style={estilo.subtitulo}>"Super Size Me" é um documentário premiado onde Morgan Spurlock come exclusivamente no McDonald's por 30 dias para destacar os efeitos 
                negativos da comida rápida na saúde. Com humor, o filme influencia mudanças no menu da rede de fast food e convida os espectadores à reflexão sobre alimentação.</Text>
                <Text style={estilo.titulo}>Dieta McDonald´s</Text>
            <View style={{width:'95%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>
                {/* <Text style={estilo.tituloCard}>Atividade</Text>
                <Text style={estilo.tituloCard}>Descrição</Text>
                <Text style={estilo.tituloCard}>Porcentagem </Text> */}
            </View>

            <Card
                imagem = 'https://i.pinimg.com/736x/0f/00/f1/0f00f1c263496257def50671e0b3d4cd.jpg'
                descricao = 'Durante a dieta ele consumiu três refeições diárias do McDonald´s, incluindo café da manhã, almoço e jantar.'>
            </Card>
            
            <Text style={estilo.titulo}>Como Ser Mais Saudável?</Text>

            <Text style={estilo.subtitulo}>Para ser mais saudável, é importante cuidar do corpo e da mente. Uma boa alimentação, rica em frutas, legumes e verduras, e a prática regular de exercícios físicos são fundamentais. Evite alimentos industrializados e açucarados. Beber bastante água também é essencial para manter o corpo hidratado."</Text>
            <Text style={estilo.subtitulo}>Além disso, é importante dormir bem, pois o sono ajuda na recuperação do corpo e na regulação das emoções. Evite o estresse, pratique atividades relaxantes e reserve um tempo para si mesmo.</Text>
            <Text style={estilo.subtitulo}>Visitas regulares ao médico e a realização de exames de rotina são importantes para prevenir doenças e manter a saúde em dia. Lembre-se, pequenas mudanças no estilo de vida podem trazer grandes benefícios para a saúde. Comece hoje mesmo a cuidar de você!</Text>

            <Text style={estilo.titulo}>Personagens</Text>
        </>
    )
}