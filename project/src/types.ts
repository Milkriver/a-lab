export type TCard = {
  id: number,
  preview: string,
  title: string,
  price: number,
  availability: boolean,
  colors?: string[],
  description?: string,
  subtitle?: string,
  images?: string[],
  sizes?: string[],
  stickerNumbers?: number[],
};

export type TCardGroup = {
  description: string,
  id: number,
  products: TCard[],
  title: string,
};

export type TOrder = {
  name: string,
  email: string,
  phone: string,
  address: string,
  deliveryType:
  "Доставка по России — 350₽" |
  "Курьером по Москве — 300₽" |
  "Самовывоз (пр-т Андропова, 18 корп. 3)"
  paymentType: "Банковская карта" | "Промокод",
  comment?: string,
  products: {
    id: number,
    totalPrice: number,
    totalCount: number,
    color?: string,
    model?: string,
    sticketNumber?: number
  }[],
};

export type TOption = { key: string, content: string };

export type TOptions = TOption[];