"use client";

import { Tag } from 'antd';
import '../../globals.css';
import './introduction.css';

export default function IntroductionPage() {

  const skills = [
    'Develop AI Agents',
    'Develop AI Solutions',
    'Develop RAG-Based Solution',
    'Generative Artificial Intelligence',
    'Microsoft Azure AI',
    'Optimize Model Performance',
    'Using Semantic Kernel',
  ]

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-person fs-3 me-3'></i>
                    <h2 className="p-0 m-0">Introduction</h2>
                  </div>
                  
                  <h6 className='text-secondary text-lg mb-5'>Introduction of myself for today's probation review</h6>

                  <div className='row w-100 g-3 align-items-stretch'>
                    
                    {/* Name */}
                    <div className='col-4'>
                      <div className='card flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center flex-fill'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-person fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0 text-center'>Muhammad Idzhans Khairi</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>Solution Engineer</label>
                          </div>  
                        </div>
                      </div>
                    </div>
                    
                    {/* Start Date */}
                    <div className='col-4 d-flex'>
                      <div className='card flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center flex-fill'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-calendar fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0 text-center'>Start Date</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>4th August 2025</label>
                          </div>   
                        </div>
                      </div>
                    </div>
                    
                    {/* Department */}
                    <div className='col-4 d-flex'>
                      <div className='card flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center flex-fill'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-suitcase-lg fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0 text-center'>Department</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>ISD (Data & AI)</label>
                          </div>  
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className='mt-5'>
                    <h5>Training and Certification</h5>
                    <div className='card mb-3'>
                      <div className='card-body'>
                        <div className='d-flex align-items-center gap-3'>
                          <img src='images/ai103-badge.png' className='img-fluid img-square' alt='AI-103 Certificate'/>
                          <div className=''>
                            <h5 className='text-primary p-0 m-0'>Develop AI solutions in Azure</h5>
                            <small>Issued by <a href='https://www.credly.com/org/iverson-associates'>Iverson Associates</a></small>

                            <p className='mt-4 text-justify small'>
                              Earners of the Develop AI solutions in Azure have learned to develop AI-infused applications on Azure using C# or Python, including generative AI apps, AI agents, and solutions implementing computer vision and information extraction.
                            </p>

                            <label className='fw-bold small'>Skills</label>

                            <div>
                              {skills.map((skill) => (
                                <Tag color="blue" key={skill} className='mb-2 me-2'>{skill}</Tag>
                              ))}
                            </div>

                            <label className='fw-bold small mt-3'>Training Date</label>
                            <div>
                              <small>22 - 26 Sep 2025</small>
                            </div>
                            
                          </div>
                        </div>
                        <div className='m-3 mt-4 p-3 border bg-note'> 
                            <h5 className='small'>Things to note:</h5>
                            <p className='p-0 m-0'>
                              The certification exam is not passed yet. Need to retake soon to get the certification for AI-103 examination.
                            </p>
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
