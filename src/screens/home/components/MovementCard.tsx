import React from 'react';
import {Movement} from '../interfaces/movementInterface';
import {View, Text, Image} from 'react-native';

interface Props {
  movement: Movement;
}

const MovementCard = ({movement}: Props) => {
  const uri = movement.image;
  const options: any = {month: 'long', day: 'numeric', year: 'numeric'};
  const date = new Date(movement.createdAt).toLocaleDateString(
    'es-CO',
    options,
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 60, height: 60, marginRight: 10}}>
          <Image source={{uri}} style={{flex: 1, borderRadius: 10}} />
        </View>
        <View style={{justifyContent: 'center', marginRight: 5}}>
          <Text style={{fontWeight: '800', fontSize: 14, color: '#000000', fontFamily: 'AvenirLTStd-Black',}}>
            {movement.product}
          </Text>
          <Text style={{fontWeight: '400', fontSize: 12, fontFamily: 'AvenirLTStd-Roman',}}>{date}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        {movement.is_redemption ? (
          <Text style={{color: '#FF0000', fontWeight: 'bold', fontSize: 16}}>
            -{' '}
          </Text>
        ) : (
          <Text style={{color: '#00B833', fontWeight: 'bold', fontSize: 16}}>
            +{' '}
          </Text>
        )}
        <Text style={{color: '#000000', fontWeight: 'bold',fontFamily: 'AvenirLTStd-Black', fontSize: 16}}>
          {movement.points}
        </Text>
        <Image
          style={{marginLeft: 10, width: 10, height: 10}}
          source={require('../../../../assets/icons/arrow.png')}/>
      </View>
    </View>
  );
};

export default MovementCard;
