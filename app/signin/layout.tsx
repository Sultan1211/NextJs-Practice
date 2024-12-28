import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>

        <div className='bg-black h-7 w-full text-white text-center'>Get 10% discount on every purchase</div>
        {children}

    </div>
  )
}

export default layout