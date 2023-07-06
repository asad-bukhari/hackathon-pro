import Image from "next/image"
import logo from '@/components/assets/Logo.webp'
export const Navbar = () => {
  return (
    <div className="py-6 flex">
        <div className="w-36">
          <Image alt="logo" width={500} height={500} src={logo} />
            
              
        </div>

    </div>
  )
}
