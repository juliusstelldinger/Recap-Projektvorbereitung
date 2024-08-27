import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.logImg}
        src={
          "https://dcassetcdn.com/design_img/10150/25224/25224_294121_10150_image.jpg"
        }
        alt="logo"
      />
    </div>
  );
}

export default NavBarLeft;
