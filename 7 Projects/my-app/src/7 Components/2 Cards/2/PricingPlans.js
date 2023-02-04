import React from 'react'
import pricingPlans from './Data'
import {TiTick} from 'react-icons/ti'
const PricingPlans = () => {
  return (
    <div className='relative '>
      <div className="absolute inset-0 flex flex-col">
        <div className=" flex-1"></div>
        <div className="bg-slate-50 flex-1"></div>
      </div>
    <div className='grid lg:grid-cols-3 py-24 gap-12 lg:gap-8 max-w-7xl mx-auto px-6 lg:px-8 '>
      {pricingPlans.map((plan)=>(
        <div key={plan.title} className='border border-slate-200 shadow-lg p-8 bg-white rounded-2xl  flex flex-col  relative'>
          <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
          {plan.mostPopular && <p className='absolute top-0 -translate-y-1/2   bg-cyan-500 text-white font-semibold text-sm tracking-wide px-3 py-0.5 rounded-full shadow-md'>Most Popular</p>}
        <p className='mt-4 text-slate-700 text-sm leading-6 '>{plan.description}</p>
       <div className='-mx-6 mt-4 bg-cyan-200 p-6 rounded-lg'>
        <p className='text-sm font-semibold text-slate-500 items-center flex'>
          <span>{plan.currency}</span>
          <span className='ml-3 text-4xl text-slate-900'>${plan.price}</span>
          <span className='ml-1.5'>{plan.frequency}</span>
        </p>
       </div>
       <ul className='mt-6 space-y-4 flex-1'>
        {plan.features.map((feature)=>(
          <li key={feature} className='text-sm flex text-slate-700 leading-6'>
           <TiTick className='h-5 w-5 text-cyan-500 shrink-0'/>
            {feature}
            </li>
        )
        
        )}
       </ul>
       <a href='#' className= {` mt-8 px-6 py-4  block leading-4 font-semibold text-sm text-center rounded-lg  
       ${plan.mostPopular?' bg-cyan-500 hover:bg-cyan-600 text-white shadow-md':'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'}`}>{plan.cta}</a>
        </div>
      ))}
    </div>
    </div>
  )
}

export default PricingPlans
