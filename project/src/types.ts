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

export type TOrderItem = {
  id: number,
  preview: string,
  color?: string, 
  model?: string,
  sticketNumber?: number,
  price: number,
  title: string
}

export type TOrderPosition = {
  /** Составной ключ productId_color_model_stickerNumber */
  id: string,
  totalCount: number,
  totalPrice: number,
  item: TOrderItem
}

export type TDeliveryInfo = {
  name: string,
  email: string,
  phone: string,
  address: string,
  agreement: boolean,
  deliveryType: string,
  paymentType: string,
  comment?: string,
}

export type TOrder = TDeliveryInfo & {
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

export type TNotification = {
  id?: number;
  title: string;
  badge?: "negative" | "positive" | "attention";
}