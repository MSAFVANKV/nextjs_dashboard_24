import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

function AddUser() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="tel" placeholder="phone" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>is Admin?</option>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>is Active?</option>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
