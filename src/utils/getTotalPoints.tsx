import { Movement } from '../screens/home/interfaces/movementInterface';

export const getTotalPoints = (movemenst: Movement[]) =>{
    let total = 0;
    let currencyFormat = Intl.NumberFormat('en-US');
    movemenst.forEach(element => {
        if (element.is_redemption){
            total -= element.points
        }else{
            total += element.points
        }
    });
    return currencyFormat.format(total);
}