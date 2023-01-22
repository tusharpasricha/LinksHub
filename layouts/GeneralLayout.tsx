import React, { ReactNode } from 'react'
import { SideNavbar } from '../components/SideNavbar'

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className='lg:pl-[290px] md:h-screen mx-auto lg:ml-20 mt-20 lg:mt-0'>
        {children}
      </div>
    </section>
  )
}

export default GeneralLayout