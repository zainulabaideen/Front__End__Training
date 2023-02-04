import React from 'react'

const pricingPlans= [
    {
        title:'Freelancer',
        price:24,
        currency:'USD',
        frequency:'/month',
        description:'The essentials to provide your best work for clients.',
        features:[
            '5 products',
            'Up to 1000 subscrobsers',
            'Basic analytics',
            '48-hou support response time',
        ],
        cta:'Start your trial',
        mostPopular:false,
    },
    {
        title:'Startup',
        price:32,
        currency:'USD',
        frequency:'/month',
        description:'A plan that scales with your rapidly growth.',
        features:[
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24 hours support rersponse time',
            'Marketing automations',
        ],
        cta:'Start your trial',
        mostPopular: true,
    },
    {
        title:'Enterprise',
        price:48,
        currency:'USD',
        frequency:'/month',
        description:'Dedicated support and infrastructure for your company',
        features:[
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'One-hours didicated support rersponse time',
            'Marketing automations',
            'Salesforce, Clearbit Reveal & Marketo integrations'
        ],
        cta:'Start your trial',
        mostPopular: false,
    },
]

export default pricingPlans
