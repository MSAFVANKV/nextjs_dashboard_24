import Image from "next/image"
import MenuLinks from "./menulinks/menulinks"
import styles from "./sidbar.module.css"
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md"
const menuItems = [
  {
    title:"Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard/>
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle/>
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>
      },
    ]
  },
  {
    title:"Analistics",
    list:[
      {
        title:"Revenue",
        path:"/dashboard/revenue",
        icon:<MdWork/>
      },
      {
        title:"Reports",
        path:"/dashboard/reports",
        icon:<MdAnalytics/>
      },
      {
        title:"Teams",
        path:"/dashboard/teams",
        icon:<MdPeople/>
      }
    ]
  }
  ,
  {
    title:"User",
    list:[
      {
        title:"Settings",
        path:"/dashboard/settings",
        icon:<MdOutlineSettings/>
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<MdHelpCenter/>
      }
    ]
  }
]

const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <Image src="/noavatar.png" className={styles.userImg} width="50" height="50"/>
          <div className={styles.userDeatails}>
            <span className={styles.username}>John Joe</span>
            <span className={styles.userTite}>Administrator</span>
          </div>
        </div>
        <ul className={styles.list}>
        {
          menuItems.map(cat=>(
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {
                cat.list.map((item) => (
                  <MenuLinks item={item} key={item.title}/>
                ))
              }
            </li>
          ))
        }
        </ul>
        <button className={styles.logout}>
          <MdLogout/>
          Logout
        </button>
      </div>
    )
  }
  
  export default Sidebar