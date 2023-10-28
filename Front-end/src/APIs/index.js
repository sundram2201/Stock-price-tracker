import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";

export const getStocksList = async (setStockList) => {
  const res = await axios.get(`${BASE_URL}api/stocks/stocks-list`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    if (res.status === 200) {
      setStockList(res.data.data);
    }
  } catch (err) {
    return err;
  }
};

export const getStockDesc = async (lastElement, setStockData) => {
  const res = await axios.get(`${BASE_URL}api/stocks/stockById?id=${lastElement}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    if (res.status === 200) {
      setStockData(res.data.data);
    }
  } catch (err) {
    return err;
  }
};
