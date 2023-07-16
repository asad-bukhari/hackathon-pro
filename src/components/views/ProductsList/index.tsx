import ProductCard from "@/components/shared/ProductCard"
import ProductImg from '@/components/assets/product1.png'
import { ProductsArray,Productstypes } from "@/components/utils/ProductsArrayAndTypes"
const ProductsList = () => {
  const ProductsChunks = ProductsArray.slice(0,3);
  return (
   

    <div className="flex justify-evenly mt-16">
      {ProductsChunks.map((items)=>(
        <ProductCard key={items.id} title={items.name} price={items.price} img={items.image} category={items.category}/>
      ))}
    </div>
  )
}

export default ProductsList