import { getApiUrl } from '../../../config/config';
import { Movement } from '../interfaces/movementInterface';

export const getMovements = () => {
    const apiUrl = getApiUrl();
    const res = fetch(apiUrl).then<Movement[]>((res) => res.json());
    return res;
}