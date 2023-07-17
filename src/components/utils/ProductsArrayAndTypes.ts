import { StaticImageData } from "next/image";
import ProductImg from '@/components/assets/product1.png'
export interface Productstypes{
    id:number,
    name:string,
    price:number,
    category:string,
    image: StaticImageData;
}

export const ProductsArray:Array<Productstypes> =[
    {
    id:1,
    name:'Product 1',
    price: 75,
    category:'female',
    image:ProductImg
},
    {
    id:2,
    name:'Product 2',
    price: 75,
    category:'female',
    image:ProductImg
},
    {
    id:3,
    name:'Product 3',
    price: 75,
    category:'male',
    image:ProductImg
},
    {
    id:4,
    name:'Product 4',
    price: 75,
    category:'kids',
    image:ProductImg
},
    {
    id:5,
    name:'Product 5',
    price: 75,
    category:'male',
    image:ProductImg
},
    {
    id:6,
    name:'Product 6',
    price: 75,
    category:'female',
    image:ProductImg
},
    {
    id:7,
    name:'Product 7',
    price: 75,
    category:'kids',
    image:ProductImg
}

]