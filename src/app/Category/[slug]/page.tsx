
import ProductCard from "@/components/shared/ProductCard"
import ProductImg from '@/components/assets/product1.png'
import { ProductsArray, Productstypes } from "@/components/utils/ProductsArrayAndTypes"

const GetProdcutsByCategory = (category:string)=>{
  return(
ProductsArray.filter((product)=>product.category==category)
  )
}

export default function Page({ params }: { params: { slug: string } }) {

const result= GetProdcutsByCategory(params.slug);

  return (
   <div>
    <div className="flex justify-evenly mt-16 gap-3 flex-wrap">
      {
        result.length>0 ? (result.map((items)=>(
          <ProductCard key={items.id} 
          title={items.name} 
          price={items.price}
           img={items.image} 
           category={items.category}
           id={items.id}
           />
        ))): <p>Products not found</p>
      }
    </div>
   </div>
  
  )}