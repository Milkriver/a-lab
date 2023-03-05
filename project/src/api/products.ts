import axios from 'axios';
import { TCard, TCardGroup, TOrder } from '../types';

const API = 'http://qa-games.ru/astore';

export const getAlfaMadeProducts = (): Promise<TCard[]> =>
    axios
        .get<TCard[]>(`${API}/made-in-alfa`)
        .then((response) => response.data);

export const getDesignProducts = (): Promise<TCardGroup[]> =>
    axios
        .get<TCardGroup[]>(`${API}/your-design`)
        .then((response) => response.data);

export const getProduct = (id: number): Promise<TCard> =>
    axios
        .get<TCard>(`${API}/product/${id}`)
        .then((response) => response.data);

export const createOrder = (order: TOrder): Promise<boolean> =>
    axios
        .post(`${API}/create-order`, order)
        .then((response) => response.status === 200);