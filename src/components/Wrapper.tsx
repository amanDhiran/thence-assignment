import React, { ReactNode } from 'react'

function Wrapper({children}: {children: ReactNode}) {
  return (
    <div className='px-5'>{children}</div>
  )
}

export default Wrapper