import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import styles from '../ui/dashboard/dashbord.module.css'
import Footer from "../ui/dashboard/footer/footer"

const Layout = ({children}) => {
    return (
      <div className={styles.container}>
        <div className="" className={styles.menu}><Sidebar/></div>
        <div className="" className={styles.content}><Navbar/>
        {children}
        <Footer/>
        </div>
      </div>
    )
  }
  
  export default Layout