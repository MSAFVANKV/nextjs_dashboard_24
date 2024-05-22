import React from "react";
import Cards from "../ui/dashboard/card/Card";
import styles from "../ui/dashboard/dashbord.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}> 
        <Rightbar/>
      </div>
    </div>
  );
}

export default Dashboard;
