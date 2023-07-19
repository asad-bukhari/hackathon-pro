import { Hero } from '@/components/views/Hero'
import Newsletter from '@/components/views/NewsLatter'
import ProductsList from '@/components/views/ProductsList'
import Promotions from '@/components/views/Promotions'

// import Jewellery from '@/components/views/Jewellery'
// import { Newslatter } from '@/components/views/NewsLatter'
import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <Hero/>
    <ProductsList/>
    <Promotions/>
    {/* {/* <Jewellery/> */}
    <Newsletter/>
   </div>
  )
}
