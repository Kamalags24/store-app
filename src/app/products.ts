export interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id:1,
        name: "Iphone XR",
        price: 299,
        description: "A unique iphone model without button who have one camera. This only one camera is perfect more than other iphone without button..."
    },
    {
        id:2,
        name: "Iphone SE 2",
        price: 399,
        description: "A unique model of iphone who have a super puissance for her appearence..."
    },
    {
        id:3,
        name: "Iphone 15 Pro Max",
        price: 899,
        description: "Just like the perfomance and the evolution of technology"
    },
    {
        id:4,
        name: "Other",
        price: 0,
        description: "",
    }
];