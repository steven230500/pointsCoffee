import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../theme/appTheme';
import {Movement} from '../home/interfaces/movementInterface';

interface Props extends StackScreenProps<any, any> {}

const DetailPage = ({route, navigation}: Props) => {
  const movement = route.params as Movement;
  const options: any = {month: 'long', day: 'numeric', year: 'numeric'};
  const date = new Date(movement.createdAt).toLocaleDateString(
    'es-CO',
    options,
  );

  return (
    <View>
      <View
        style={styles.detailPage}>
        <Text
          style={styles.titleProduct}>
          {movement.product}
        </Text>
      </View>
      <View
        style={styles.containerDetail}>
        <Image
          source={{uri: movement.image}}
          style={{flex: 1, borderRadius: 10}}
        />
      </View>
      <View style={{margin: 20}}>
        <Text
          style={styles.exactp}>
          Detalles del producto
        </Text>
        <Text
          style={{
            color: '#000000',
            fontWeight: '800',
            fontSize: 16,
            fontFamily: 'AvenirLTStd-Black',
            marginBottom: 10,
          }}>
          Comprado el {date}
        </Text>
        <Text
          style={{
            color: '#9B9898',
            fontFamily: 'AvenirLTStd-Black',
            fontWeight: '800',
            fontSize: 14,
            marginBottom: 20,
          }}>
          Con esta compra acumulaste:
        </Text>
        <Text
          style={{
            color: '#000000',
            fontFamily: 'AvenirLTStd-Black',
            fontWeight: '800',
            fontSize: 24,
            marginBottom: 10,
          }}>
          {movement.points} Puntos
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor: '#334FFA',
          width: '90%',
          height: 50,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => navigation.pop()}>
        <Text style={styles.textAllBtn}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailPage;
