// eslint-disable-next-line no-unused-vars
import React from 'react'
import Github from '../assets/Github.png'
import LinkPreview from "../Tests/LinkPreview/link-preview.jsx";
// eslint-disable-next-line react/prop-types
const Cards = ({ item, darkMode })=> {
    return (
       <div className={`border rounded-lg w-[350px] lg:w-[400px] flex flex-col h-full 
    ${darkMode ? 'border-cyan-400 bg-gray-800 text-white' : 'border-cyan-500 bg-cyan-50 text-black'}`}>
            <div className="w-full h-44 lg:h-56">
               <img
                src={item.image}    
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-cyan-500 text-white px-3 py-2 rounded-md'>
                        <LinkPreview url={item.live} target='_blank'
                                     className='bg-cyan-500 text-white px-3 py-2 rounded-md'>
                            Live Preview
                        </LinkPreview>
                    </button>
                    <button className='bg-black px-3 py-2 rounded-md'>
                        <LinkPreview url={item.github} target={'_blank'} className={'flex gap-1 text-white'}>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </LinkPreview>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

