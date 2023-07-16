import {BsCart} from 'react-icons/bs'
import Image from 'next/image';
import f1 from '@/components/assets/Featured1.webp'
import f2 from '@/components/assets/Featured2.webp'
import f3 from '@/components/assets/Featured3.webp'
import f4 from '@/components/assets/Featured4.webp'
import heroimg from '@/components/assets/header.webp'

export const Hero = () => {
    const btnText = "Start\n shopping";
  return (
    <div className='py-5 flex justify-between items-center px-2'>
        {/* Right Side */}

        <div className='space-y-6 max-w-sm'>
          <button className='rounded-md bg-gray-300 text-blue-700 font-medium px-4 py-2'>
            Sale 70%
            </button>
            <h1 className='text-4xl md:text-6xl text-gray-700 font-bold '>An Industrial Take on Streetwear</h1>
            <p className='text-gray-700'> Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>  
            <button className='flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5'>
            <BsCart/>
            <p className='whitespace-pre leading-4'>
                {btnText}
            </p>
            </button>

            <div className='flex gap-4'>
                <div className='w-14 md:w-28'>
                    <Image width={100} height={100} src={f1} alt='f1'/>
                </div>
                <div className='w-14 md:w-28'>
                    <Image width={100} height={100} src={f2} alt='f2'/>
                </div>
                <div className='w-14 md:w-28'>
                    <Image width={100} height={100} src={f3} alt='f3'/>
                </div>
                <div className='w-14 md:w-28'>
                    <Image width={100} height={100} src={f4} alt='f4'/>
                </div>
            </div>
        </div>
        
        {/* left side */}
        <div className='hidden md:flex bg-red-300 rounded-full'>
            <Image src={heroimg} alt=''/>
        </div>
    </div>
  )
}
