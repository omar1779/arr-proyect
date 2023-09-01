import axios from "axios";

export const getAll = async () => {
	try {
	  const response = await axios.get(
		"http://localhost:3000/Annual_Accouting_Records"
	  );
	  return response.data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  throw error;
	}
  };

  export const getArrById = async (data: any) => {
	try {
	  const response = await axios.get(
		"http://localhost:3000/Annual_Accouting_Records/"+data
	  );
	  return response.data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  throw error;
	}
  };

export const postData = async (data: any) => {
	try {
	  const response = await axios.post(
		"http://localhost:3000/Annual_Accounting_Records",
		data
	  );
	  console.log("Data posted successfully:", response.data);
	  return response.data;
	} catch (error) {
	  console.error("Error posting data:", error);
	  throw error;
	}
  };