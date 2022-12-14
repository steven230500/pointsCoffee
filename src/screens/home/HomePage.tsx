import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import {getTotalPoints} from '../../utils/getTotalPoints';
import MovementCard from './components/MovementCard';
import MovementShimmerCard from './components/MovementShimmerCard';
import {useMovement} from './hooks/useMovements';

interface Props extends StackScreenProps<any, any> {}

const HomePage = ({navigation}: Props) => {
  const {movement, loading, error, redemption, setRedemption} = useMovement();

  const ContentCard = () => {
    const n = Array.from({length: 5}, (_, i) => i);
    if (error) {
      return <Text>{error}</Text>;
    }

    return (
      <View style={styles.mainContainer}>
        {loading ? (
          n.map((_, index) => <MovementShimmerCard key={index} />)
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movement}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                <MovementCard movement={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.globalContainer}>
      <View style={{marginVertical: 20}}>
        <Text style={[styles.h1, {fontFamily: 'AvenirLTStd-Black'}]}>
          Bienvenido de vuelta!
        </Text>
        <Text style={[styles.h1, {fontFamily: 'AvenirLTStd-Book'}]}>
          Ruben Rodriguez
        </Text>
      </View>
      <View>
        <Text style={styles.h2}>TUS PUNTOS</Text>
        <View style={styles.pointsCard}>
          <Text style={styles.titleCard}>Diciembre</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.numberPoints}>
              {getTotalPoints(movement)}
              {' pts'}
            </Text>
          </View>
        </View>
        <Text style={[styles.h2, {marginVertical: 20}]}>TUS MOVIMIENTOS</Text>
        <ContentCard />
      </View>
      {redemption === '' ? (
        <View style={styles.rowBtns}>
          <TouchableOpacity
            style={styles.containerBtn}
            onPress={() => setRedemption('ganados')}>
            <Text style={styles.textBtn}>Ganados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerBtn}
            onPress={() => setRedemption('canjeados')}>
            <Text style={styles.textBtn}>Canjeados</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.allBtn}
          onPress={() => setRedemption('')}>
          <Text style={styles.textAllBtn}>Todos</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomePage;
