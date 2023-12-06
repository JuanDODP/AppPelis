import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/CreditsInterface';
interface ac {
  actor: Cast;
}
export const CardItem = ({actor}: ac) => {
  const uri = `https://image.tmdb.org/t/p/w500//${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <Image
        style={{height: 50, width: 50, borderRadius: 25}}
        source={{
          uri,
        }}
      />
      <View style={styles.actorInfo}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {actor.name}
        </Text>
        <Text style={{color: 'black', fontSize: 16, opacity: 0.5}}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,
  },
  actorInfo:{
    marginLeft:10
  }
});
