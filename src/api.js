import axios from "axios";

export const getData = async () => {
  const data = await axios.get(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  return data.data.data;
};
