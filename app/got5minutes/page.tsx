"use client"
import Image from 'next/image';
import { useState, FC, ReactNode } from 'react';
import FlipCard from '@/components/Flipcard2';

import img6 from '@/assets/img6.svg'

type TabPanelProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabPanel: FC<TabPanelProps> = ({ label, isActive, onClick }) => {
  return (
    <button
  onClick={onClick}
  className={`w-full p-4 ${isActive ? 'bg-gray-50 hover:bg-gray-100 text-gray-900' : 'bg-gray-700 hover:bg-gray-600 text-gray-400'} focus:outline-none rounded-lg`}
  aria-selected={isActive}
>
  {label}
</button>

  );
};

interface TabContentProps {
  id: string;
  isActive: boolean;
  children?: ReactNode;
}

const TabContent: FC<TabContentProps> = ({ id, isActive, children }) => {
  return (
    <div
      id={id}
      className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${isActive ? 'block' : 'hidden'}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
};

const got5minutes: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('stats');
  const tabData: { [key: string]: any[] } = {
    'budgeting': [
      { 
        id: 1,
        frontTitle: "",
        title: "“The best way to stick to a budget is to start one.” " ,
        description: "Budgeting is actually a road map of your personal finances — an important visual guide to support financial decisions on a daily basis.Essentially, it means that by creating a budget you’ll be on your way to making room for more savings, paying off debts, or even setting up an emergency fund that’s on the top of your priority list.",
        imageUrl: "/path/to/image1.jpg",
      },
      { 
        id: 2,
        frontTitle: "Budgeting2",
        title: "Find Your Budgeting Fit: Explore Popular Methods",
        description: "50/30/20 Rule: This simple approach allocates 50% to needs (rent, bills), 30% to wants (entertainment, dining), and 20% to savings/debt.",
        description2: "Zero-Based Budget: This detailed method assigns every penny a purpose. Your income minus expenses should equal zero, ensuring you track every last cents."

      },
      { 
        id: 3,
        title: "Snap to Save: Fast Budgeting Hacks ",
        description: "A fantastic personal budgeting tip is to follow psychologist Edwin Locke’s SMART goal-setting method. SMART stands for: Specific, Measurable, Attainable, Relevant, and Time-bound. As long as your budgeting goals adhere to each and every one of these five descriptions, they’re realistic enough for you to start your budget.        ",
        imageUrl: "/path/to/image2.jpg",
      },
      { 
        id: 4,
        title: "Avoiding Common Budget Pitfalls",
        description: "Are you putting too much on credit? Look over the budget categories where you overspent, paying close attention to your credit card statements.",
        description2: "Are you behind the times? Sometimes, a budget gets out of sync not because of unnecessary spending, but because of rising prices for necessary expenses. "
      },
      
    ],
    'saving': [
      { 
        id: 1,
        title: "Card 1 for Saving",
        description: "Description for Card 1",
        imageUrl: "/path/to/image1.jpg",
      },
      { 
        id: 2,
        title: "Card 2 for Saving",
        description: "Description for Card 2",
        imageUrl: "/path/to/image2.jpg",
      },
      
    ],
    // Define data for other tabs similarly
    'investing': [],
    'debt-management': [],
    'retirement-planning': []
  };
  return (
    <div className='card-color mb-20' >
        <div className="bg-primary wave-header min-h-screen relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b5eda" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,224C640,181,800,107,960,74.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className='md:px-14 p-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center'>

                {/* Text Section */}
                <div className='md:w-2/5 text-center md:text-left'>
          <h2 className=' mt-20 md:text-5xl text-3xl font-bold text-black mb-5 leading-normal'>
            Take <span className='text-black'>Control of Everything</span> in Your Hands
          </h2>
          <p className='mt-10 text-black text-lg mb-7'>
            A paragraph is a collection of words combined together to make a longer unit than a sentence.
            It's a set of sentences that are well-organized and coherent
          </p>
        </div>

                {/* Image Section */}
                <div className='md:w-1/2 mb-6 md:mb-0 relative ml-auto'>
                    <Image src={img6} alt="" width={400} height={400} className="hover:scale-110 transition-transform duration-300 absolute inset-0 z-10" />
                </div>    
            </div>
        </div>
    <div className="card-color w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select tab</label>
        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Budgeting</option>
          <option>Saving</option>
          <option>Investing</option>
          <option>Debt Management</option>
          <option>Retirement Planning</option>
        </select>
      </div>
      <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
        <li className="w-full">
          <TabPanel label="Budgeting" isActive={activeTab === 'budgeting'} onClick={() => setActiveTab('budgeting')} />
        </li>
        <li className="w-full">
          <TabPanel label="Saving" isActive={activeTab === 'saving'} onClick={() => setActiveTab('saving')} />
        </li>
        <li className="w-full">
          <TabPanel label="Investing" isActive={activeTab === 'investing'} onClick={() => setActiveTab('investing')} />
        </li>
        <li className="w-full">
          <TabPanel label="Debt Management" isActive={activeTab === 'debt-management'} onClick={() => setActiveTab('debt-management')} />
        </li>
        <li className="w-full">
          <TabPanel label="Retirement Planning"  isActive={activeTab === 'retirement-planning'} onClick={() => setActiveTab('retirement-planning')} />
        </li>
      </ul>
      <div id="fullWidthTabContent" className=" border-t border-gray-200 dark:border-gray-600">
          <TabContent id="budgeting" isActive={activeTab === 'budgeting'}>
            <div className='flex card-color'>
              {tabData['budgeting'].map((item, index) => (
                <FlipCard key={index} {...item} />
              ))}
            </div>
          </TabContent>
          <TabContent id="saving" isActive={activeTab === 'saving'}>
            <div className='flex card-color'>
              {tabData['saving'].map((item, index) => (
                <FlipCard key={index} {...item} />
              ))}
            </div>
          </TabContent>
          <TabContent id="investing" isActive={activeTab === 'investing'}>
            <div className='flex card-color'>
              {tabData['investing'].map((item, index) => (
                <FlipCard key={index} {...item} />
              ))}
            </div>
          </TabContent>
          <TabContent id="debt-management" isActive={activeTab === 'debt-management'}>
            <div className='flex card-color'>
              {tabData['debt-management'].map((item, index) => (
                <FlipCard key={index} {...item} />
              ))}
            </div>
          </TabContent>
          <TabContent id="retirement-planning" isActive={activeTab === 'retirement-planning'}>
            <div className='flex card-color'>
              {tabData['retirement-planning'].map((item, index) => (
                <FlipCard key={index} {...item} />
              ))}
            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default got5minutes;