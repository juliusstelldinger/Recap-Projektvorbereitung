import ReceipiesRequests from "../../api/v1/receipes/ReceipiesRequests";
import StandardBtn from "../../components/common/buttons/standard-btn";
import ReceipeContext from "../../contexts/receipe-context/ReceipeContext";
import AppData from "../../utils/AppData";
import styles from "./HomeScreen.module.css";
import ReceipeItem from "./receipe-item";
import { useContext, useEffect, useState } from "react";

function HomeScreen() {
  const { receipes, fetchAllReceipeItems } = useContext(ReceipeContext);

  useEffect(() => {
    fetchAllReceipeItems();
  }, []);

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
