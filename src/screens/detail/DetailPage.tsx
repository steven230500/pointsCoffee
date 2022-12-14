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
      <View style={styles.detailPage}>
        <Text style={styles.titleProduct}>{movement.product}</Text>
      </View>
      <View style={styles.containerDetail}>
        <Image
          source={{uri: movement.image}}
          style={{flex: 1, borderRadius: 10}}
        />
      </View>
      <View style={{margin: 20}}>
        <Text style={styles.exactp}>Detalles del producto</Text>
        <Text style={styles.textCreatedAt}>Comprado el {date}</Text>
        <Text
          style={[styles.exactp,{marginBottom: 20}]}>
          Con esta compra acumulaste:
        </Text>
        <Text
          style={styles.numberPointsDetail}>
          {movement.points} Puntos
        </Text>
      </View>
      <TouchableOpacity
        style={styles.textBtnDetail}
        onPress={() => navigation.pop()}>
        <Text style={styles.textAllBtn}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailPage;
