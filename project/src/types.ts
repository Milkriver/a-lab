export type TCardPreview = {
    id: number,
    preview: string,
    title: string,
    price: number,
    availability: boolean,
  };
  
  export type TCard = {
    id: number,
    preview: string,
    title: string,
    price: number,
    availability: boolean,
    colors: string[],
    description: string,
    subtitle: string,
    images: string[],
    sizes: string[],
    stickerNumbers: number[],
  };
  
  export type TCardGroup = {
    description: string,
    id: number,
    products: TCard[],
    title: string,
  };

  export type TOrder = {
    body: {
      type: "object",
      required: [
        "name",
        "email",
        "phone",
        "address",
        "deliveryType",
        "paymentType",
      ],
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        phone: { type: "string" },
        address: { type: "string" },
        deliveryType: {
          type: "string",
          enum: [
            "Доставка по России — 350₽",
            "Курьером по Москве — 300₽",
            "Самовывоз (пр-т Андропова, 18 корп. 3)",
          ],
        },
        paymentType: {
          type: "string",
          enum: ["Банковская карта", "Промокод"],
        },
        comment: { type: "string" },
        products: {
          type: "array",
          items: {
            type: "object",
            required: ['id', 'totalPrice', 'totalCount'],
            properties: {
              id: { type: "number" },
              totalPrice: { type: "number" },
              totalCount: { type: "number" },
              color: { type: "string" },
              model: {
                type: "string",
              },
              sticketNumber: {
                type: "number",
              },
            },
          },
        },
      },
    },
  };

export type TOption = { key: string, content: string };

export type TOptions = TOption[];