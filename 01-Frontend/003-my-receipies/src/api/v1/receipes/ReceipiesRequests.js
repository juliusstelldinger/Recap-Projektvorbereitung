import api from "../../config/api";

async function getAllReceipes() {
  const result = await api.get("/receipes/all");
  const resultData = result.data;
  return resultData;
}

export default { getAllReceipes };
