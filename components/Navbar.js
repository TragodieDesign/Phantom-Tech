import Link from "next/link"
import NextImage from "./Image"

const Navbar = ({}) => {
  return (
    <div className="flex justify-between mt-4 bg-black-300">
        <div className="Logo">
        <Link href="/">
        <a>
          <NextImage
            src="/logo_branco108x108.png"
            alt="home"
            className="logo"
            height="108"
            width="108"
          />
        </a>
      </Link>
        </div>

      
      <div className="cart">
      <button className="snipcart-checkout flex items-center">
        <NextImage height="150" width="150" src="/shopping-cart.png" alt="Cart" />
        
        <span className="snipcart-total-price font-semibold text-sm text-green-500"></span>
      </button>
      </div>
    </div>
  )
}

export default Navbar
