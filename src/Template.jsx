import React from 'react'
import { useSelector } from 'react-redux'

function Template() {

const data = useSelector((state) => {
  return state.details
})
console.log(data)
  return (
    <div className='template'>
        <div className="details">
            <div className='image'>
                <img src={data.image} alt="" />
            </div>
            <div className='name'>
                <h1>{data.name}</h1>
                <h4>{data.role}</h4>
                <h4>Total-Experience:-{data.totalExperience}</h4>
            </div>
        </div>

    </div>
  )
}

export default Template