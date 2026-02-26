
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between  p-5 items-center'>
            <div className='flex gap-9'>
                <h1 className='font-bold'><Link href="/">Logo</Link></h1>
                    <ul className='flex gap-5 cursor-pointer'>
                        <li><Link href='/about'>Company</Link></li>
                        <li><Link href='/blog'>blogs</Link></li>
                        <li><Link href='/contactUS'>contact us</Link></li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <button>Login</button>
                    <button className='bg-emerald-500 rounded-full px-2 py-1 text-white'>Sign up </button>
                </div>
            </nav>
    )
}

export default Navbar