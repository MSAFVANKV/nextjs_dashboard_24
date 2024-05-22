import styles from "@/app/ui/dashboard/users/sigleUser/singleUser.module.css";
import Image from "next/image";

function singleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill/>
        </div>
        john Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="username">username</label>
        <input type="text"  name="username" placeholder="username"/>

        <label htmlFor="email">email</label>
        <input type="email"  name="email" placeholder="email"/>

        <label htmlFor="password">password</label>
        <input type="password"  name="password" />

        <label htmlFor="phone">phone</label>
        <input type="text"  name="phone" placeholder="phone"/>

        <label htmlFor="address">address</label>
        <textarea type="text"  name="address" placeholder="address"/>

        <label htmlFor="isAdmin">isAdmin</label>
        <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>

        <label htmlFor="isActive">isActive</label>
        <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
        
      </div>
    </div>
  );
}

export default singleUserPage;
