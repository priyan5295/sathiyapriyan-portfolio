import ResumeImg from '../assets/resume.jpg'
export default function Resume() {
    const downloadbtn = {
        link : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-banner px-5 py-5'>
        <div className='md:w-1/2 py-5 flex md:justify-end justify-center'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary font-port-font w-[140px] font-bold'>Resume</h1>
            <p className='mt-4 mb-3'>You can view my resume <a className='btn mt-3' href={downloadbtn.link}>Download</a></p>
            </div>
        </div>
    </section>
}