import React from 'react'

const Cardtwo = () => {
    const data=[
        {
        title:"The Kings Man",
        url: 'https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi hic consequatur ab libero dolor cumque autem deleniti porro repudiandae, totam provident eveniet voluptates adipisci voluptatem culpa voluptate veniam sunt?',
        rating:'9.0 rating'
    },
    {
        title:"Spider Man ",
        url: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi hic consequatur ab libero dolor cumque autem deleniti porro repudiandae, totam provident eveniet voluptates adipisci voluptatem culpa voluptate veniam sunt?',
        rating:'9.5 rating'
    },
    {
        title:"Resident Evil  ",
        url: 'https://m.media-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi hic consequatur ab libero dolor cumque autem deleniti porro repudiandae, totam provident eveniet voluptates adipisci voluptatem culpa voluptate veniam sunt?',
        rating:'9.9 rating'
    }
]
  return (
    <div>
      <section className='bg-gray-900 h-screen flex justify-center items-center   md:gap-x-16 text-white'>
      {data.map((dat)=>(
       
     
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d  group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className='absolute border-2 backface-hidden  w-full h-full'>
                    <img src={dat.url} alt="" className='w-full h-full'/>
                </div>
                <div className="absolute my-rotate-y-180 w-full h-full backface-hidden bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col  text-gray-800 items-center justify-center h-full px-2 pb-24"><h1 className='text-3xl font-semibold'>{dat.title}</h1>
                    <p className="my-2">{dat.rating}</p>
                    <p>{dat.description}</p>
                    <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                        Watch Now</button></div>
                </div>
            </div>
        </div>
         ))}
      </section>
    </div>
  )
}

export default Cardtwo
