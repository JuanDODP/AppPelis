import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/MovieInterfaces';
import {Cast} from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormater from 'currency-formatter'
import { CardItem } from './CardItem';
interface Props {
  moviefull: MovieFull;
  cast: Cast[];
}

export const MovieDetail = ({cast, moviefull}: Props) => { 
  let calif =moviefull.vote_average;
  let start =''

  if(calif <=  7){
    start='star-outline'
  }
  else if(calif >7 && calif <=8){
    start='star-half-outline'
  }
  else{
    start='diamond-outline'
  }
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}> 
      <Icon name={start}  color='black' size={20}/>
      <Text style={{color: 'black', marginLeft: 10}} >{moviefull.vote_average}</Text>
        <Text style={{color: 'black', marginLeft: 10}}> {moviefull.genres.map(g=> g.name ).join(",")}</Text>
      </View>
      <Text style={{color:'black', fontSize:25, fontWeight:'bold', textAlign:'center'}}>Historia</Text>
      <Text style={{color: 'black', marginLeft: 10, fontSize:15}}>{moviefull.overview}</Text>
      <Text style={{color:'black', fontSize:25, fontWeight:'bold', marginLeft:10}}>Presupuesto</Text>
      <Text style={{color:'black', fontSize:20,  }}>  { currencyFormater.format(moviefull.budget,{code:'USD'})}</Text>
      <View style={{marginHorizontal:20}}>
      <Text style={{color:'black', fontSize:25, fontWeight:'bold', marginLeft:10, textAlign:'center'}}>ACTORES</Text>

      <CardItem  actor={cast[0]}/>

      </View>


    </View>
  );
};
