"use client";

import '../../globals.css';
import { Table } from 'antd';


export default function WorkChallengesPage() {

  const dataSource = [
    {
      key:'1',
      number: '1',
      challenge: 'I am currently the only team member working on AI-related tasks (specifically Azure AI Foundry). Having no peers to collaborate or share challenges with can be stressful.',
      improvements: 'Having a mentor or senior or other staff that will do work related to AI would be highly beneficial.'
    },
    {
      key: '2',
      number: '2',
      challenge: 'I have not been assigned to many real production projects, as most of my work so far has involved proof-of-concepts (POCs) or self-discovery tasks assigned by Choo Hoong. As a result, I have had limited exposure to customers and sometimes lack clear direction for my own development.',
      improvements: 'Having some assigned task or discovery may help provide clearer direction and purpose.'
    },
    {
      key: '3',
      number: '3',
      challenge: 'At the moment, I am handling most development-related tasks on my own, including features such as the document generator.',
      improvements: 'Having a mentor or senior developer to guide me through complex development tasks would be highly beneficial.'
    },
    {
      key: '4',
      number: '4',
      challenge: 'There is limited exposure to open-source projects, which restricts opportunities to enhance skills such as web development, LLM deployment, and AI engineering.',
      improvements: 'Maybe these are the things that I expected to be discovered in Enfrasys AI.'
    },
    {
      key: '5',
      number: '5',
      challenge: 'Daily long commute (~2 hours each way) reduces my available time / personal time and energy.',
      improvements: 'Allowing 2–3 days per week of work-from-home, while attending the office for meetings or client interactions, would help improve productivity, focus, and mental wellbeing.'
    },
  ]

  const columns = [
    {
      key: 'number',
      title: 'No.',
      dataIndex: 'number',
    },
    {
      key: 'challenge',
      title: 'What are the challenge',
      dataIndex: 'challenge',
    },
    {
      key: 'improvements',
      title: 'What could be improved',
      dataIndex: 'improvements',
    },
  ]



  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-exclamation-triangle-fill fs-3 me-3'></i>
                      <h2 className="p-0 m-0">Work Challenges</h2>
                  </div>
                  
                  <h6 className='text-secondary text-lg mb-3'>Any challenges faced during work and how they were overcome.</h6>

                  <div className='mb-4 border'>
                    <Table pagination={false} columns={columns} dataSource={dataSource} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
