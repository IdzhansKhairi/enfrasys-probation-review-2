"use client";

import '../../globals.css';
import './thank-you.css';

import { Tag } from 'antd';

export default function WhatNextPage() {

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  <div className='content-size d-flex flex-column align-items-center justify-content-center'>
                    <h2 className="">THANK YOU!!!</h2>
                    <h6 className='text-secondary text-lg'>Thank you for your time for this probation review!!!</h6>
                    <Tag className='mt-4' color="blue">Feel free to ask any questions!</Tag>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
