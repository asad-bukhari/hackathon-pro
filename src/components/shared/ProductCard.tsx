import Image from "next/image"
import ProductImg from '@/components/assets/product1.png'
import { StaticImageData } from "next/image"
import Link from "next/link"
import { ProductsArray } from "../utils/ProductsArrayAndTypes"
const ProductCard= (props:{title:string,price:number, img:StaticImageData, category:string, id:number}) => {
  return (
    <div>
      <Link href={`/Products/${props.id}`}>
         <Image src={props.img} alt="alt"/>
        <h3 className="font-bold tex-lg mt-3">{props.title}</h3>
        <p  className="font-bold tex-lg mt-3">{props.price}</p>
        <p>{props.category}</p>
      
        </Link>
    </div>
  )
}

export default ProductCard