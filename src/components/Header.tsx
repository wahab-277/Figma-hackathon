import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const helveticaStyle = { fontFamily: 'Helvetica, Arial, sans-serif' };

    return (
        <div className='bg-[#0D0D0D]'>
            <nav className='p-10 gap-11'>
                <div
                    className='flex justify-center text-center items-center font-bold text-4xl'
                    style={helveticaStyle} // Apply Helvetica font style here
                >
                    <span className='text-[#FF9F0D]'>Food</span>
                    <span className='text-white'>tuck</span>
                </div>
                <div className='flex justify-around gap-x-96 p-5'>
                    <ul className='text-white flex gap-x-5'>
                        <Link href="/home"><li>Home</li></Link>
                        <Link href="/menu"><li>Menu</li></Link>
                        <Link href="/blog"><li>Blog</li></Link>
                        <Link href="/pages"><li>Pages</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/shop"><li>Shop</li></Link>
                        <Link href="/contact"><li>Contact</li></Link>
                    </ul>
                    <div className="flex items-center space-x-3 bg-[#0D0D0D] rounded-full px-4 py-2 text-white border-2 border-yellow-500 ">
                        <FontAwesomeIcon icon={faSearch} className="text-yellow-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
                        />
                        <FontAwesomeIcon icon={faShoppingCart} className="text-yellow-500" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
