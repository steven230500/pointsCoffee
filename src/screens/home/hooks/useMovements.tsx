import {useEffect, useState} from 'react';
import {Movement} from '../interfaces/movementInterface';
import {getMovements} from '../services/GetMovements';

export const useMovement = () => {
  const [movement, setmovement] = useState<Movement[]>([]);
  const [error, seterror] = useState<any>();
  const [loading, setloading] = useState(true);
  const [redemption, setRedemption] = useState('');

  useEffect(() => {
    getMovements()
      .then(
        res => {
          setmovement(
            res
              .sort((a: Movement, b: Movement) => {
                let date1 = new Date(a.createdAt);
                let date2 = new Date(b.createdAt);

                return date2.getTime() - date1.getTime();
              })
              .filter(m => {
                if (redemption === 'ganados') {
                  return !m.is_redemption;
                }
                if (redemption === 'canjeados') {
                  return m.is_redemption;
                }
                return m;
              }),
          );
        },
        err => {
          seterror(err);
        },
      )
      .finally(() => {
        setloading(false);
      });
  }, [redemption]);

  return {
    movement,
    redemption,
    setRedemption,
    error,
    loading,
  };
};
