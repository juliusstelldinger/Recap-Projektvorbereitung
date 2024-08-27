import React, { createContext, useState } from "react";
import ReceipiesRequests from "../../api/v1/receipes/ReceipiesRequests";

const ReceipeContext = createContext();

export const ReceipeProvider = ({ children }) => {
  const [receipes, setReceipes] = useState([]);

  function deleteReceipeItem(itemId) {
    const newItems = receipes.filter((item) => item.id !== itemId);
    setReceipes(newItems);
  }

  async function fetchAllReceipeItems() {
    const items = await ReceipiesRequests.getAllReceipes();
    setReceipes(items);
  }

  return (
    <ReceipeContext.Provider
      value={{ receipes, fetchAllReceipeItems, deleteReceipeItem }}
    >
      {children}
    </ReceipeContext.Provider>
  );
};
export default ReceipeContext;
