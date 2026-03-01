import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100'>
            <div className='flex items-center gap-12'>
                {/* Logo Section */}
                <h1 className='text-xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-emerald-600'>
                    <Link href="/">Logo</Link>
                </h1>

                {/* Navigation Links */}
                <ul className='hidden md:flex gap-8 items-center text-sm font-medium text-slate-600'>
                    <li className='hover:text-emerald-600 transition-colors'>
                        <Link href='/about'>Company</Link>
                    </li>
                    <li className='hover:text-emerald-600 transition-colors'>
                        <Link href='/blog'>Blogs</Link>
                    </li>
                    <li className='hover:text-emerald-600 transition-colors'>
                        <Link href='/contactUS'>Contact Us</Link>
                    </li>
                </ul>
            </div>

            {/* CTA Buttons */}
            <div className='flex items-center gap-6'>
                <button className='text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors'>
                    Login
                </button>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-emerald-200 transition-all active:scale-95'>
                    Sign up
                </button>
            </div>
        </nav>
    )
}

export default Navbar