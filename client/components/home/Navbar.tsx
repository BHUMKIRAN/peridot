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
            <div className='flex items-center gap-5'>
                <Link href="/support" className='hidden sm:block text-sm font-medium text-slate-500 hover:text-emerald-600'>
                    Help Center
                </Link>
                <Link href="/book-call" className='bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-5 py-2 rounded-lg text-sm font-bold transition-colors'>
                    Book a Demo
                </Link>
            </div>
        </nav>
    )
}

export default Navbar