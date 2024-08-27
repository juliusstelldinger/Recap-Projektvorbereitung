import styles from "./ReceipeItem.module.css";

function ReceipeItem({ receipe }) {
  return (
    <div className={styles.container}>
      <h4>{receipe.name}</h4>
      <h6>{`Backzeit: ${receipe.backzeit}`}</h6>
      <h6>{`Level: ${receipe.level}`}</h6>
    </div>
  );
}

export default ReceipeItem;
