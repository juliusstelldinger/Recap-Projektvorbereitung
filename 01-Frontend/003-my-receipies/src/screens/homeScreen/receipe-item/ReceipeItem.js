import { useContext } from "react";
import StandardBtn from "../../../components/common/buttons/standard-btn";
import styles from "./ReceipeItem.module.css";
import ReceipeContext from "../../../contexts/receipe-context/ReceipeContext";

function ReceipeItem({ receipe }) {
  const { deleteReceipeItem } = useContext(ReceipeContext);

  function onClickDelete() {
    deleteReceipeItem(receipe.id);
  }
  return (
    <div className={styles.container}>
      <h4>{receipe.name}</h4>
      <h6>{`Backzeit: ${receipe.backzeit}`}</h6>
      <h6>{`Level: ${receipe.level}`}</h6>

      <StandardBtn text={"Delete"} onClick={onClickDelete} />
    </div>
  );
}

export default ReceipeItem;
