import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getAlfaMadeProducts, getDesignProducts, getProduct } from './products';
import { TCard, TCardGroup } from '../types';

const productsMock: TCard[] = [
    {
        id: 1,
        preview: 'http://src1',
        images: [
            'http://qa-games.ru/astore/public/images/68519498.jpeg',
            'http://qa-games.ru/astore/public/images/56653281.jpeg'
        ],
        title: 'Футболка Для умных и свободных',
        description: 'Мягкая хлопковая',
        price: 200,
        availability: true
    },
    {
        id: 2,
        preview: 'http://src2',
        images: [
            'http://qa-games.ru/astore/public/images/22582542.jpeg'
        ],
        title: 'Чехол Для умных и свободных',
        description: 'Состав и способ ухода вынесли на самое видное место.',
        price: 100,
        availability: true
    },
]

const groupsMock: TCardGroup[] = [
    {
        id: 1,
        products: productsMock,
        title: 'Группа1',
        description: 'Описание группы',
    },
]

describe("API", () => {
    it('should call single product', async () => {
        const server = setupServer(
            rest.get("http://qa-games.ru/astore/product/:productId", (req, res, ctx) => {
                const { productId } = req.params;
                const body = Object.assign(productsMock[0], { id: Number(productId) })
                return res(ctx.status(200), ctx.json(body))
            })
        );
        server.listen()

        const requestId = 777;
        const response = await getProduct(requestId);
        expect(response.id).toEqual(requestId);
        expect(response.title).toEqual('Футболка Для умных и свободных');
        server.close();
    });

    it('should call product groups', async () => {
        const server = setupServer(
            rest.get("http://qa-games.ru/astore/your-design", (_, res, ctx) => res(ctx.status(200), ctx.json(groupsMock)))
        );
        server.listen()

        const response = await getDesignProducts();
        expect(response).toHaveLength(1);
        expect(response[0].title).toEqual('Группа1');
        server.close();
    });

    it('should call many products', async () => {
        const server = setupServer(
            rest.get("http://qa-games.ru/astore/made-in-alfa", (_, res, ctx) => res(ctx.status(200), ctx.json(productsMock)))
        );
        server.listen()

        const response = await getAlfaMadeProducts();
        expect(response).toHaveLength(2);
        expect(response[0].title).toEqual('Футболка Для умных и свободных');
        expect(response[1].title).toEqual('Чехол Для умных и свободных');
        server.close();
    });
});
