import React from 'react'
                    

const Home = () => {
  
  return (
    <>
    <div className='grid  gap-10 max-w-7xl mx:auto px-5 py-6 '>
      <div className='grid gap-2'>
        <h1 className=' text-3xl text-center my-6'>Welcome To TaskManager</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-shadow-black'>
              <div className='flex flex-col items-center text-center p-4 bg-[#f7f779] rounded-3xl shadow-md hover:scale-105 transition'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 md:size-20">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                  </svg>
                <h1 className='md:text-2xl font-bold'>Flexibillity</h1>
              </div>
              <div className='flex flex-col items-center text-center p-4 bg-[#9fccfa] rounded-3xl shadow-md hover:scale-105 transition'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 md:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <h1 className='md:text-2xl font-bold '>Capture Flag</h1>
              </div>
              <div className='flex flex-col items-center text-center p-4 bg-[#fbe9d7] rounded-3xl shadow-md hover:scale-105 transition'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 md:size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                      </svg>
                  <h1 className='md:text-2xl font-bold '>Free to Use</h1>
              </div>
          </div>
        </div>
        <div className="relative grid bg-white text-black sm:grid-cols-2 justify-around rounded-2xl shadow-md shadow-black p-5">
            <div className="absolute -top-2 -left-2 w-10 h-10 bg-purple-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rotate-45 opacity-50"></div>
          <div className="bg-white p-4 rounded-2xl ">
            <h2 className="text-lg font-bold">Benifits of Using This App</h2>
            <p className='text-lg mb-4 '>sometimes we will be lazy espacially me so why we dont use an app that set our goals </p>
            <div className="sm:w-50 sm:h-50 bg-blue-400 rounded-full w-25 h-25 "></div> 
          </div>
          <div className='grid grid-cols-2 p-6 gap-8 '>
            <div className='grid px-8 py-6 rounded-3xl justify-center  bg-[#FFCF99]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-15">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              <h1 className='sm:text-lg mt-3 sm:font-bold '>Goals</h1>
            </div>
             <div className='grid px-8 py-6 rounded-3xl justify-center bg-[#84828F]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-15">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <h1 className='sm:text-lg mt-3 sm:font-bold'>Discipline</h1>
            </div>
             <div className='grid px-8 py-6 rounded-3xl justify-center bg-[#fff95b]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mx-auto size-15">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <h1 className='sm:text-lg mt-3 sm:font-bold'>Success</h1>
            </div>
             <div className='grid px-8 py-6 rounded-3xl justify-center bg-[#b5c6e0]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
              <h1 className='sm:text-lg mt-3 sm:font-bold '>Potential</h1>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-6 text-black bg-white shadow-md shadow-black rounded-2xl p-6'>
          <div className='space-y-4'>
              <h1 className='md:text-3xl md:m-6 m-2'>how this app works </h1>
              <p className='md:text-2xl text-gray-400 md:m-6 m-2'> using this app is pretty easy actually that a human beign can understand this</p>
              <ol className='mlist-decimal pl-5 space-y-2 text-gray-700 text-lg'>
                <li>Log in to account</li>
                <li>Add a Task in Dashboard</li>
                <li>Modify your Tasks</li>
              </ol>
          </div>
          <div className='p-2'>
            <img className="w-full h-full object-cover rounded-3xl"src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFza3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
        <div className=' bg-white shadow-md p-6 space-y-4 rounded-2xl text-black shadow-black'>
            <div className='flex gap-4 items-center justify-between flex-col px-5  '>
                <h1 className='md:text-3xl mt-4'>About this app </h1>
                <p className='md:text-2xl text-gray-500'>
              This is one of my first ever Complex site that i have ever buid whit this you can easily 
              if you really want to see my projects please check my GitHub account thank you very much
              </p>
            </div>
        <div className='w-full rounded-2xl'>
           <div className=" relative  w-0 h-0 border-b-[86.6px] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent rotate-45">
           </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Home