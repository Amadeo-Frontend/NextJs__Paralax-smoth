import React from 'react'

const HighLightItem: React.FC<{title:string; content:string}> = ({ title, content }) => {
  return (
    <div>
      <span>{title}</span>
      <p>{content}</p>
    </div>
  )
}

export default HighLightItem
