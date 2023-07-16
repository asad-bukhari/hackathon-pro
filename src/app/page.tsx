import { Hero } from '@/components/views/Hero'
import ProductsList from '@/components/views/ProductsList'

// import Jewellery from '@/components/views/Jewellery'
// import { Newslatter } from '@/components/views/NewsLatter'
import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <Hero/>
    <ProductsList/>
    {/* <Jewellery/>
    <Newslatter/> */}
   </div>
  )
}
