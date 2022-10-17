import HeadPage from "../HeadPage/HeadPage"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"

const Layout = ({ children, nameContinen }) => {
    return (
        <>
            <HeadPage continentName={nameContinen}/>
            <Sidebar />
            {children}
            <Footer />
        </>
    )
  }
  
  export default Layout