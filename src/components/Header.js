import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {

    const [mobiletoggle, setMobileToggle] = useState(false)


    return  (
    <header className="flex justify-between px-5 py-2 bg-primary">
        <Link to="/" className='font-bold text-white text-4xl font-port-font'>Priyan</Link>
        {/* <a className="font-bold text-black" href="#">Priyan</a> */}
        <nav className="hidden md:block">
            <ul className="flex text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        {mobiletoggle && <nav className="block md:hidden ">
            <ul onClick={() => setMobileToggle(!mobiletoggle)} className="flex flex-col text-white mobile-nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>}
        <button onClick={() => setMobileToggle(!mobiletoggle)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
    );
}