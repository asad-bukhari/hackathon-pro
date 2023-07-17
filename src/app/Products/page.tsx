import { ProductsArray } from "@/components/utils/ProductsArrayAndTypes"
import ProductCard from "@/components/shared/ProductCard"
const AllProducts = () => {
  return (
    <div>
         <div className="flex justify-evenly mt-16 gap-3 flex-wrap">
      {ProductsArray.map((items)=>(
        <ProductCard key={items.id} title={items.name} 
        price={items.price} 
        img={items.image}
         category={items.category}
         id={items.id}/>
         
      ))}
    </div>
    </div>
  )
}

export default AllProducts