import Image from "next/image"
import {BiSearch} from 'react-icons/bi'
import {BsCart2} from 'react-icons/bs'
import logo from '@/components/assets/Logo.webp'
import { NavbarArray,NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
export const Navbar = () => {
  return (
    <div className="py-6 flex justify-between items-center">
        <div className="w-36">
          <Image alt="logo" width={500} height={500} src={logo} />
         </div>

        <ul className="flex space-x-4 font-medium text-lg">
          {NavbarArray.map((item:NavbarItemType, index:number):any=>(
            
            <li>
              <Link key={item.href} href={item.href}>{item.label}</Link>
            </li>

          ))}
        </ul>
        
        <div className="border flex items-center text-gray-600 px-3 rounded-md">
          <BiSearch/>
          <input type="text" className="pl-1 pr-5 py-1 w-80" 
          placeholder="Search in the Store"/>
        </div>
        <div className="relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 absolute  top-1 bg-red-400 text-xs font-light rounded-full flex items-center justify-center">3
          </div>
            <BsCart2 size={24}/>
          
        </div>
    </div>
  )
}
