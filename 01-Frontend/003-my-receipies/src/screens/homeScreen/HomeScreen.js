import AppData from "../../utils/AppData";
import styles from "./HomeScreen.module.css";
import ReceipeItem from "./receipe-item";

function HomeScreen() {
  const receipes = AppData.AllExampleReceipes;
  return (
    <div className={styles.mainContainer}>
      Home
      <div>
        {receipes.map((receipeValue) => {
          return <ReceipeItem receipe={receipeValue} />;
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
