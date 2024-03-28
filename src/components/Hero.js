import BannerImg from '../assets/hero.png'
import { FaXTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import AnimatedText from './Animatedtext';

export default function Hero() {
    const conflig = {
        subtitle: 'Web Developer &  Designer',
        social: {
            twitter: 'https://twitter.com/i/flow/login',
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.linkedin.com/'
        }
    }
    return <section>
        <div className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
            <div className='md:w-1/2 flex flex-col'>
                    <h1 className='text-white text-6xl font-port-font'>Hi, <br/>
                    I'm <span className='text-black'>Sathiya priyan</span>
                    {/* <p className='text-2xl'>{conflig.subtitle}</p> */}
                    <AnimatedText text={conflig.subtitle}/>
                    </h1>
                <div className='flex py-10'>
                    <a href={conflig.social.twitter} target='_blank' className='pr-5 hover:text-white'><FaXTwitter size={40} /></a>
                    <a href={conflig.social.facebook} target='_blank' className='pr-5 hover:text-white'><FaFacebookF size={40} /></a>
                    <a href={conflig.social.instagram} target='_blank' className='hover:text-white'><FaLinkedin size={40} /></a>
                </div>
            </div>
            
            <img className="md:w-1/3" src={BannerImg}/>
        </div>
    </section>
}