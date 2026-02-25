
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between  p-5 items-center'>
                <div className='flex gap-9'>
                    <h1 className='font-bold'>Logo</h1>
                    <ul className='flex gap-5 cursor-pointer'>
                        <li><Link href='/'>Features</Link></li>
                        <li><Link href='/'>Accounts</Link></li>
                        <li><Link href='/'>Company</Link></li>
                        <li><Link href='/about'>Insight</Link></li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <button>Login</button>
                    <button className='bg-emerald-500 rounded-full px-2 py-1 text-white'>Sign up </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar