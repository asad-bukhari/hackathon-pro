
import { ProductsArray, Productstypes } from "@/components/utils/ProductsArrayAndTypes"
import Image from "next/image";
const GetProdcutsById = (id:number)=>{
  return(
ProductsArray.filter((product)=>product.id==id)
  )
}

export default function Page({ params }: { params: { id: number } }) {

let result= GetProdcutsById(params.id);

  return (
   <div>
    {
      result.map((product)=>(
        <div key={product.id} className="flex justify-between">
<div>
  <Image src={product.image} alt={product.name}/>
</div>
<div>
  <h3>Product Details</h3>
  <p>{product.price}</p>
</div>
        </div>
      ))
    }
   </div>
  )}