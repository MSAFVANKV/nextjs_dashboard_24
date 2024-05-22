import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

function singleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noproduct.jpg" alt="" fill/>
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">title</label>
        <input type="text"  name="title" placeholder="title"/>

        <label htmlFor="price">price</label>
        <input type="number"  name="price" placeholder="price"/>

        <label htmlFor="stock">stock</label>
        <input type="number"  name="stock" />

        <label htmlFor="color">color</label>
        <input type="text"  name="color" placeholder="color"/>

        <label htmlFor="size">size</label>
        <input type="text"  name="size" placeholder="size"/>

        <label htmlFor="cat">category</label>
        <select name="cat" id="cat">
            <option value="phone">phone</option>
            <option value="laptop">laptop</option>
            <option value="computer">computer</option>
        </select>

        <label htmlFor="isActive">Description</label>
        <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
        <button>Update</button>
        </form>
        
      </div>
    </div>
  );
}

export default singleProductPage;
