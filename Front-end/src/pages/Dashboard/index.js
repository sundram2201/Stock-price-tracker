import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { tableCols } from "./TableCols";
import { getStocksList } from "../../APIs";

const StockTable = ({ data }) => {
  const navigate = useNavigate();

  const onRowClick = (record) => {
    navigate(`/stock/${record?._id}`);
  };

  return (
    <Table
      className='table-container'
      style={{ cursor: "pointer" }}
      columns={tableCols.map((col, index) => {
        if (index === 0 || index === tableCols.length - 1) {
          col.className = "bold-cell";
        }
        return col;
      })}
      dataSource={data}
      onRow={(record) => {
        return {
          onClick: () => onRowClick(record),
        };
      }}
    />
  );
};

const Dashboard = () => {
  const [stockList, setStockList] = useState([]);

  const fetchStocksList = () => {
    getStocksList(setStockList);
  };

  useEffect(() => {
    fetchStocksList();

    const intervalId = setInterval(() => {
      fetchStocksList();
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <StockTable data={stockList} />;
};

export default Dashboard;
