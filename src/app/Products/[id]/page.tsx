
import { ProductsArray, Productstypes } from "@/components/utils/ProductsArrayAndTypes"
import Image from "next/image";
const GetProdcutsById = (id: number) => {
  return (
    ProductsArray.filter((product) => product.id == id)
  )
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export default function Page({ params }: { params: { id: number } }) {

  let result = GetProdcutsById(params.id);

  return (
    <div className="flex flex-wrap py-10 mt-16">
      {
        result.map((product) => (
          <div key={product.id} className="flex justify-between gap-6">
            {/* let image */}
            <div>
              <Image src={product.image} alt={product.name} />
            </div>
            {/* Right Content */}
            <div>
              <div>
                <h1 className="text-2xl ">{product.name}</h1>
                <h2 className="text-base text-gray-400 font-semibold">{product.tagline}</h2>
              </div>

              <div>
                <h3 className="mt-6 text-xs font-semibold">Select Size</h3>
              </div>
              <div className="flex gap-x-3">
                {
                  sizes.map((items) => (
                    <div>
                      <div className="flex justify-center items-centerw-6 h-6 rounded-full hover:shadow-2xl border  mt-2 ">
                        <span className="text-xs font-semibold text-center text-gray-600">{items}</span>
                      </div>
                    </div>
                  ))
                }
              </div>

{/* Quantity */}
<div className="flex gap-x-3 mt-6 items-center" >
  <h3 className="text-[10px] font-serif">Quantity</h3>
  <div>1</div>
</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}