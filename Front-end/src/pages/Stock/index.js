import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { getStockDesc } from "../../APIs";

export const getLastElementId = () => {
  const path = window.location.pathname.split("/");
  return path[path.length - 1];
};

const Stock = () => {
  const [stockData, setStockData] = useState("");

  const PriceChange = ({ value }) => {
    const percentageChange = parseFloat(((value - stockData.initial_price) / stockData.initial_price) * 100).toFixed(2);

    const colorStyle =
      percentageChange > 0 ? { fontWeight: "bold", color: "rgb(60, 179, 113)" } : { fontWeight: "bold", color: "red" };

    return (
      <div style={colorStyle}>
        {percentageChange}% <i className={`bi bi-caret-${percentageChange > 0 ? "up" : "down"}-fill`}></i>
      </div>
    );
  };

  const descList = [
    { title: "Company", value: stockData?.company },
    { title: "Symbol", value: stockData?.symbol },
    { title: "Initial Price", value: stockData?.initial_price },
    { title: "Price in 2022 ($)", value: stockData?.price_2022 },
    { title: "Current price ($)", value: stockData?.current_price },
    { title: "Price from 2022 (%)", value: <PriceChange value={stockData?.price_2022} /> },
    { title: "Price from initial (%)", value: <PriceChange value={stockData?.price_2022} /> },
  ];

  useEffect(() => {
    const lastElement = getLastElementId();

    getStockDesc(lastElement, setStockData);
  }, []);

  return (
    <>
      <div className='backBtn'>
        <Link to='/'>
          <i className='bi bi-arrow-bar-left'></i> Back
        </Link>
      </div>
      <div className='table-container'>
        <Row gutter={24}>
          <Col className='gutter-row' span={12}>
            <div className='heading'>
              <h1>{`${stockData?.company} (${stockData?.symbol})`}</h1>
              <h3>About {stockData?.company || "-"}</h3>
              <p>{stockData?.description || "-"}</p>
            </div>
          </Col>
          <Col className='gutter-row descListKeys' span={6}>
            {descList.map((el, i) => {
              return (
                <span key={i} style={{ fontWeight: "bold" }}>
                  {el?.title || "-"}
                </span>
              );
            })}
          </Col>
          <Col className='gutter-row descListVals' span={6}>
            {descList.map((el, i) => {
              return <span key={i}>{el?.value || "-"}</span>;
            })}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Stock;
