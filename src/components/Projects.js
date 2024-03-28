import ecommerceImages from '../assets/ecommerce-websites.jpg'
import ecommerceImages2 from '../assets/website-blog.jpg'



export default function Projects() {
    const config = {
        projects: [
            {
                image: ecommerceImages,
                description: 'A Infinityhub Websites. Build an BS5 & Laravel',
                link: 'https://www.theinfinityhub.com/'
            },
            {
                image: ecommerceImages2,
                description: 'Portfolio pages IH. Built with BS5',
                link: 'https://www.theinfinityhub.com/portfolio'
            }
        ]
    }
    return <section id='projects'>
        <div className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary font-port-font w-[135px] font-bold">Projects</h1>
            <p>These are my Projects. I have built in These with ReactJS, BS5, Laravel</p>
            </div>
            
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 mt-5'>
                {config.projects.map((project) => (
                        <div className='relative'>
                        <img className='h-[230px] w-[500px]' src={project.image} />
                        <div className='projects-descp'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                        </div>
                        </div>
                        </div>
                ))}
            </div>
        </div>
        </div>
    </section>
}