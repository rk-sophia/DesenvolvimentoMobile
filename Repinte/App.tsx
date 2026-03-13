import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function App() {

  //India o video e coloca ele em loop
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
    player.loop = true
    //player.play() inicia o video quando abre o app
  })

  return (
  <ScrollView contentContainerStyle={styles.container}>
  <Text style={styles.titulo}>Salão do Francis</Text>
  
  <Text style={styles.textoCorpo}>
    Com a franquia da maior especialista em restauração predial do mercado, o seu retorno pode acontecer no 1° ano com até 40% de lucratividade!

    {"\n\n"}
    Você pode iniciar Home Based

    Descansa nos finais de semana

    A obra é executada a partir do financiamento do próprio cliente
  </Text>

  <Image 
  source={require('./assets/imagem 1.jpg')} 
  style={styles.imagemInicio} 
  />

  <StatusBar style="auto" />
  
   <VideoView player ={player} style ={styles.video}
    allowsPictureInPicture/>

</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#f8cf76ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25, // Importante para o texto não bater nas bordas
  },
  titulo: {
    marginTop:35,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  textoCorpo: {
    fontSize: 16,
    lineHeight: 24, // Dá espaço entre as linhas
    textAlign: 'justify',
    color: '#444',
  },

  imagemInicio: {
  width: 500,
  height: 250,
  resizeMode: 'contain', // Isso garante que a imagem não fique esticada
  marginTop: 40,
  marginBottom: 50,
},

  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
  controlsContainer: {
    padding: 10,
  },
});
