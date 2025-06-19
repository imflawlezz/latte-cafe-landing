export interface Dish {
    name: string;
    description: string;
    price: number;
}

export interface MenuCategory {
    name: string;
    dishes: Dish[];
}

export interface Menu {
    title: string;
    categories: MenuCategory[];
}


