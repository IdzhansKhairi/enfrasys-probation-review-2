"use client";

import '../../globals.css';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Badge } from 'antd';
import { Table } from 'antd';
import { useState } from 'react';

export default function ClientRelatedWorkPage() {

  type MenuItems = Required<MenuProps>['items'][number];

  const clients = {
    uemg: {
      menuItems: [
        { key: 'task', label: 'Task', icon: <i className="bi bi-clipboard-check"></i> },
        { key: 'solution', label: 'Solution', icon: <i className="bi bi-check-circle-fill"></i> },
      ],
      content: {
        task: <h5>UEMG Task</h5>,
        solution: <h5>UEMG Solution</h5>,
      }
    },
    napic: {
      menuItems: [
        { key: 'task', label: 'Task', icon: <i className="bi bi-clipboard-check"></i> },
        { key: 'architecture', label: 'Architecture', icon: <i className="bi bi-diagram-2-fill"></i> },
        { key: 'source-document', label: 'Source Document', icon: <i className="bi bi-file-text-fill"></i> },
        { key: 'generated-document', label: 'Generated Document', icon: <i className="bi bi-file-check-fill"></i> },
      ],
      content: {
        task: (
          <div className='mt-4'>
            <p>NAPIC Task content...</p>
          </div>
        ),
        architecture: (
          <div className='mt-4'>
            <p>Architecture content...</p>
          </div>
        ),
        'source-document': (
          <div className='mt-4' style={{height: '70vh'}}>
            <iframe src='/media/jpph-source-report.pdf#zoom70' className='w-100 h-100'/>
          </div>
        ),
        'generated-document': (
          <div className='mt-4' style={{height: '70vh'}}>
            <iframe src='/media/jpph-generated-report.pdf#zoom70' className='w-100 h-100'/>
          </div>
        ),
      }
    }
  };

  const items: MenuItems[] = [
    {
      label: 'Task',
      key: 'task',
      icon: <i className="bi bi-clipboard-check"></i>
    },
    {
      label: 'Architecture',
      key: 'architecture',
      icon: <i className="bi bi-diagram-2-fill"></i>
    },
    {
      label: 'Source Document',
      key: 'source-document',
      icon: <i className="bi bi-file-text-fill"></i>
    },
    {
      label: 'Generated Document',
      key: 'generated-document',
      icon: <i className="bi bi-file-check-fill"></i>
    },
  ]

  const uemgItems: MenuItems[] = [
    {
      label: 'Task',
      key: 'uemgtask',
      icon: <i className="bi bi-clipboard-check"></i>
    },
    {
      label: 'Solution',
      key: 'uemgsolution',
      icon: <i className="bi bi-check-circle-fill"></i>
    },
  ]

  const [current, setCurrent] = useState('task');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const [uemgCurrent, setUemgCurrent] = useState('uemgtask')
  const onUemgClick: MenuProps['onClick'] = (e) => {
    setUemgCurrent(e.key);
  };

  const [selectedClient, setSelectedClient] = useState('uemg');

  const uemgDataSource = [
    {
      key: 'ai-search',
      logo: <img src="/images/logos/ai-search.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'Azure AI Search',
      usage: 'Index documents using RAG and enable semantic retrieval for the Copilot Studio chatbot.'
    },
    {
      key: 'storage-account',
      logo: <img src="/images/logos/storage-account.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'Storage Account',
      usage: 'Store all sorts documents securely and serve content via authorized links.'
    },
    {
      key: 'key-vault',
      logo: <img src="/images/logos/key-vault.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'Key Vault',
      usage: 'Generate and manage keys appended to document links to provide secure access without exposing the storage publicly.'
    },
    {
      key: 'logic-apps',
      logo: <img src="/images/logos/logic-apps.png" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'Logic Apps',
      usage: 'Automate key rotation daily to prevent reuse and enhance security.'
    },
    {
      key: 'ai-foundry',
      logo: <img src="/images/logos/ai-foundry.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'AI Foundry',
      usage: 'Use the Text Embedding model to vectorize documents in AI Search for semantic understanding by the chatbot.'
    },
    {
      key: 'copilot-studio',
      logo: <img src="/images/logos/copilot-studio.png" style={{ height: '50px', objectFit: 'contain' }} />,
      resource: 'Copilot Studio',
      usage: 'Used for quick testing of the chatbot functionality before updating to the Modern Work team.'
    },
  ]

  const uemgColumns = [
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
    },
    {
      title: 'Resource',
      dataIndex: 'resource',
      key: 'resource',
    },
    {
      title: 'Usage',
      dataIndex: 'usage',
      key: 'usage',
    }
  ]

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  {/* Title and sub-title */}
                  <div className='mb-4'>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-briefcase fs-3 me-3'></i>
                      <h2 className="p-0 m-0">Client Related Work</h2>
                    </div>
                    
                    <h6 className='text-secondary text-lg mb-3'>Any works / projects that is related to clients.</h6>
                  </div>

                  {/* Dropdown */}
                  <div className='d-flex justify-content-end mb-4'>
                    <select className='form-select' value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
                      <option value='uemg'>UEMG</option>
                      <option value='napic'>NAPIC</option>
                    </select>
                  </div>

                  {/* When UEMG Selected */}
                  {selectedClient === 'uemg' && (
                    <div>
                      <div>
                        <Menu onClick={onUemgClick} selectedKeys={[uemgCurrent]} mode='horizontal' items={uemgItems}/>
                      </div>

                      <div className='mx-3 mb-4'>
                        {uemgCurrent === 'uemgtask' && (
                          <div className='mt-4'>
                            <div className='row'>
                              <div className='col-4 d-flex align-items-center justify-content-center'>
                                <img src="/images/uemg.jpg" className='w-50'/>
                              </div>
                              <div className='col-8'>

                                <div className='card mb-4'>
                                  <div className='card-header'>
                                    <h5 className='p-0 m-0'>Aim of The Project</h5>
                                  </div>
                                  <div className='card-body'>
                                    <p className='p-0 m-0'>Discovered the usage of AI Search for indexing documents, enabling the Copilot Studio chatbot to retrieve relevant information based on semantic user queries. Additionally, explored returning authorized file links from Blob Storage using Key Vault values to ensure secure access.</p>
                                  </div>
                                </div>

                                <div className='card'>
                                  <div className='card-header'>
                                    <h5 className='p-0 m-0 text-justify'>Background & Solution</h5>
                                  </div>
                                  <div className='card-body'>
                                    <p className='p-0 m-0 text-justify'>
                                      UEMG was the first client-related task assigned to me by Lucas Tan Zhi Hong and Asyraf. This project gave me hands-on experience using AI Search to index documents via RAG, and I explored the Azure AI Foundry Text Embedding model to vectorize content for semantic understanding by the Copilot Studio chatbot.<br/><br/>

                                      I also worked on securely providing access to document links without exposing the Storage Account publicly. This was achieved using Key Vault to generate a unique key appended to the link, allowing direct access to the document. Additionally, I leveraged Logic Apps to automatically generate new keys daily, reducing the risk of data breaches.
                                    </p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}
                        {uemgCurrent === 'uemgsolution' && (
                          <div className='mt-4'>
                            <div>
                              <Table dataSource={uemgDataSource} columns={uemgColumns} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* When NAPIC Selected */}
                  {selectedClient === 'napic' && (
                    <div>
                      <div>
                        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items}/>
                      </div>

                      <div className='mx-3 mb-4'>
                        {current === 'task' && (
                          <div className='mt-4'>
                            <div className='row'>
                              <div className='d-flex justify-content-end mb-3'>
                                <Badge status='processing' count="Still in Proof of Concept"/>
                              </div>

                              <div className='col-4 d-flex align-items-center justify-content-center'>
                                <img src="/images/jpph_logo.png" className='w-50'/>
                              </div>
                              <div className='col-8'>

                                <div className='card mb-4'>
                                  <div className='card-header'>
                                    <h5 className='p-0 m-0'>Aim of The Project</h5>
                                  </div>
                                  <div className='card-body'>
                                    <p className='p-0 m-0'>To leverage Azure AI Foundry to generate JPPH reports, following their template without making any changes to the template.</p>
                                  </div>
                                </div>

                                <div className='card'>
                                  <div className='card-header'>
                                    <h5 className='p-0 m-0 text-justify'>Background & Solution</h5>
                                  </div>
                                  <div className='card-body'>
                                    <p className='p-0 m-0 text-justify'>
                                      NAPIC, also known as the National Property Information Centre, releases their Laporan Stok Harta Tanah periodically. These reports were previously typed manually every time a new report was created.<br/><br/>

                                      Zainal Asyraf approached me to explore whether we could use Azure AI Foundry to generate these reports while keeping the exact template. Since the AI model alone couldn’t produce a full report with strict formatting, I designed a solution where the AI handles writing, translation, and generating the HTML version of the report. This content is then converted to PDF and finally to Word for any further editing.<br/><br/>

                                      The application is built using Python Flask and deployed on Azure Web App.

                                    </p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}
                        {current === 'architecture' && (
                          <div className='mt-4'>
                            <p>Details about the architecture related to JPPH Report Generator.</p>
                            <img src="/images/jpph-workflow.png" className='w-100 border'/>
                          </div>
                        )}
                        {current === 'source-document' && (
                          <div className='mt-4'>
                            <div className='row w-100' style={{height: '70vh'}}>
                              <iframe className='' src='/media/jpph-source-report.pdf#zoom70' />
                            </div>
                          </div>
                        )}
                        {current === 'generated-document' && (
                          <div className='mt-4'>
                            <div className='row w-100' style={{height: '70vh'}}>
                              <iframe className='' src='/media/jpph-generated-report.pdf#zoom70' />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  
                  

                </div>
            </div>
        </div>
    </div>
  )
}
