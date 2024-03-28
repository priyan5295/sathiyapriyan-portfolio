export default function Contact() {
    const address = {
        email : 'abcd234@gmail.com',
        phone: '+4578963218'
    }
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32'>
        
        <div className='flex flex-col items-center text-white'>
            
            <h1 className='text-4xl border-b-4 border-secondary font-port-font w-[130px] font-bold'>Contact</h1>
            <p className='mt-4'>If You Want to disccus more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email:</span> {address.email}</p>
            <p className='py-2'><span className='font-bold'>Phone:</span> {address.phone}</p>
        </div>
    </section>
}