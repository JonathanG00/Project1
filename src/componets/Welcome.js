import React, { PureComponent } from 'react'

export class Welcome extends PureComponent {
  render() {
    return (
        <div name ='info' className='w-full h-screen bg-blue-200 text-black-700'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-900 sm:text-3xl font-bold'>HI! Welcome to</p>
            <h1 className='text-4xl sm:text-8xl font-style:italic font-bold text-pink-900'> My Profile</h1>
          
            <div>
        </div>
        </div>
        </div>
    )
  }
}

export default Welcome