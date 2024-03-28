import ABoutImg from '../assets/about.png'
export default function About() {
    const config = {
        line1: 'Hi My Name is Sathiya Priyan. I am a Jr.Full Stack Developer. I built websites with Reactjs and Tailwind CSS',
        line2: 'I am a Proficient Front ENd Skills like Bootstrap, Reactjs, Tailwind css, CSS, Sass, CSS3'
    }
    return <section className='flex flex-col md:flex-row bg-banner px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img  src={ABoutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary font-port-font w-[155px] font-bold'>About Me</h1>
            <p className='mt-4'>{config.line1}</p>
            <p className='mt-4'>{config.line2}</p>
            </div>
        </div>
    </section>
}