import { PropsWithChildren } from 'react'
import Header from '../layouts/Header'
import SideBar from '../layouts/SideBar'
import PropTypes from 'prop-types'

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

PageLayout.prototype = {
  children: PropTypes.node.isRequired
}

export default PageLayout
