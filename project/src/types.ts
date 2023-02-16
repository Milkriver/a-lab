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
  
  export type TCardList = {
    description: string,
    id: number,
    products: TCard[],
    title: string,
  };

export type TOption = { key: string, content: string };

export type TOptions = TOption[];