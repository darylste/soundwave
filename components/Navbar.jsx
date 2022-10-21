import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	return (
		<div className='navbar-container'>
			<p className='logo'>
				<Link href='/'>
					<Image
						src='/assets/logo.png'
						width={186.8}
						height={40}
						className='logo'
					/>
				</Link>
			</p>
			<button
				type='button'
				className='cart-icon'
				onClick={() => setShowCart(true)}
			>
				<AiOutlineShopping />
				<span className='cart-item-qty'>{totalQuantities}</span>
			</button>

			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
