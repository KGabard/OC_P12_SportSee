import { PropsWithChildren } from 'react'
import Header from '../layouts/Header'
import SideBar from '../layouts/SideBar'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="page-layout">
        <SideBar />
        <div className="page-body">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
