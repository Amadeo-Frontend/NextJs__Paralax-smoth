import React from 'react'

const HighLightItem: React.FC<{title:string; content:string}> = ({ title, content }) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='uppercase text-sm'>{title}</span>
      <p className='text-2xl'>{content}</p>
    </div>
  )
}

export default HighLightItem
