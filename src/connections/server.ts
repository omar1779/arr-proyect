import axios from "axios";

export const getAll = async () => {
  const response = await axios.get(
    "http://localhost:3000/Annual_Accouting_Records"
  );
  const data = response.data;
  console.log(data);
};
