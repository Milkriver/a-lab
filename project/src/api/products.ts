import axios from 'axios';
import { TCard, TCardGroup, TCardPreview } from '../types';

const API = 'http://qa-games.ru/astore';
const APIROUTES = {
    AlfaMade: '/made-in-alfa',
    Design: '/your-design',
    Product: '/product',
    Order: '/create-order',
}

export const getAlfaMadeProducts = (): Promise<TCardPreview[]> =>
    axios
        .get<TCardPreview[]>(`${API}${APIROUTES.AlfaMade}`)
        .then((response) => response.data);

export const getDesignProducts = (): Promise<TCardGroup[]> =>
    axios
        .get<TCardGroup[]>(`${API}${APIROUTES.Design}`)
        .then((response) => response.data);

export const getProduct = (id: number): Promise<TCard> =>
    axios
        .get<TCard>(`${API}${APIROUTES.Product}/${id}`)
        .then((response) => response.data);