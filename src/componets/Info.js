import { useNavigate } from 'react-router-dom';
export const Info =() =>{
  const navigate = useNavigate()
  return (
    <div name ='info' className='w-full h-screen bg-blue-200 text-black-700'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-900 sm:text-3xl font-bold'>HI! My name is</p>
            <h1 className='text-4xl sm:text-8xl font-style:italic font-bold text-pink-900'>Jonathan Gacos</h1>
            <h1 className='text-4xl sm:text-4xl font-bold text-yellow-500'>From STI College Dasma</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-green-600'>Intern of Hacktiv Collav Inc</h2>
            <div>
            <button onClick = {() => navigate("Nav")} className='bg-indigo-900 text-white font[Poppins] py-2 px-6 w-[250px] rounded md:ml-8 hover:bg-indigo-400 duration-500'>
                Home
            </button>
            </div>
        </div>
    </div>

  )
}
