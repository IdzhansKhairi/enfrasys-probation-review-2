"use client";

import '../../globals.css';
import './experience-growth.css';

export default function ExperienceGrowthPage() {

    const logos = [
    '/images/logos/ant-design.png',
    '/images/logos/keycloak.png',
    '/images/logos/nextjs.png',
    '/images/logos/ant-charts-design.jpg',
    '/images/logos/azure.png',
    '/images/logos/ai-foundry.jpg',
    '/images/logos/r-shiny.png',
    '/images/logos/sweetalert.jpg',
    '/images/logos/bootstrap.png',
  ];

    return (
        <div className="">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card px-4 w-75">
                    <div className="card-body">
                        <div className='d-flex align-items-center mb-2'>
                            <i className='bi bi-graph-up-arrow fs-3 me-3'></i>
                            <h2 className="p-0 m-0">Experience & Growth</h2>
                        </div>
                    
                        <h6 className='text-secondary text-lg mb-3'>Any experience and growth I have gained during my probation period.</h6>

                        <div className='mt-4 d-flex justify-content-center no-wrap gap-3 flex-nowrap overflow-auto'>
                            {logos.map((logo, idx) => (
                            <img key={idx} src={logo} alt={`logo-${idx}`} style={{ height: '50px', objectFit: 'contain' }} />
                            ))}
                        </div>

                        <div className='mt-4'>
                            <div className='row mb-4'>
                                <div className='col-6 d-flex'>
                                    <div className='card flex-fill'>
                                        <img src='images/ai103-training.jpg' className='card-img-top img-square' alt='Attending AI-103 Training'/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-primary'>Attending Microsoft AI-103 Training / Exams</h5>
                                            <p className='card-text text-justify'>
                                                Gained hands-on experience with Azure AI-103, integrating AI Foundry capabilities into code. I learned about AI Search, Document Intelligence, and other AI services. Passing the certification exam soon is my next goal to formalize this learning.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-6 d-flex'>
                                    <div className='card flex-fill'>
                                        <img src='images/malaysia-vllm-day.jpg' className='card-img-top img-square' alt='Attending Malaysia VLLM Day'/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-primary'>Attending Malaysia's VLLM Day</h5>
                                            <p className='card-text text-justify'>
                                                Attended the vLLM Malaysia event, gaining knowledge about LMCache, GPU usage, and real-world LLM engineering practices, which broadened my understanding of AI engineering and inspired me to explore practical applications in my own projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='row mb-4'>
                                <div className='col-6 d-flex'>
                                    <div className='card'>
                                        <img src='images/lucas-farewell.jpg' className='card-img-top img-square img-positioning' alt='Team Picture'/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-primary'>Team Interaction</h5>
                                            <p className='card-text text-justify'>
                                                So far, my interactions with the team and other colleagues have been positive, with no conflicts or issues. I rarely work directly with my immediate team members, as they focus on data-related projects. Instead, I collaborate with Albert, Syaqieb, and Lim Yun Liang on the document generator project. This is my first experience in a cross-capability discussion, where I’m developing the document generator using Flask while learning about Power Automate, which was previously unfamiliar to me. Looking forward to discover and learn more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 d-flex'>
                                    <div className='card'>
                                        <img src='images/first-client-meeting.jpg' className='card-img-top img-square img-positioning' alt='Team Picture'/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-primary'>First Online Meeting with Client</h5>
                                            <p className='card-text text-justify'>
                                                My first client meeting opened up my perspective on the types of questions and requirements clients may have. It helped me become more aware of different possibilities and think more carefully about solutions that align with their needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
