import Button from './Button';
export const Nav = () => {
  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex item-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex item-center font -[Poppins] text-gray-500'>
            <span className='text 3xl text-blue-600 mr-1 pt-2'>
            <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            Personal Data
            </div>
            
            <ul className={`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto [-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}>
            
                <Button>
                    More Information
                </Button>
            </ul>
        </div>
    </div>
  )
}
export default Nav