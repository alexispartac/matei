interface Sizes {
    size: string;
    available: boolean;
    pieces?: number;
    color?: string;
    discount?: number;
}

export interface Item {
    id: string;
    title: string;
    img: string[];
    sizes?: Sizes;
    price: number;
    favorite: boolean;
    cart?: boolean;
    description?: string
}