export const tableCols = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    sorter: (a, b) => (a.symbol.toLowerCase() < b.symbol.toLowerCase() ? 1 : -1),
    sortDirections: ["descend"],
  },
  {
    title: "Company name",
    dataIndex: "company",
  },
  {
    title: "Initial price",
    dataIndex: "initial_price",
    sorter: (a, b) => a.initial_price - b.initial_price,
  },
  {
    title: "Price in 2022",
    dataIndex: "price_2022",
    sorter: (a, b) => a.price_2022 - b.price_2022,
  },

  {
    title: "Current price",
    dataIndex: "current_price",
    sorter: (a, b) => a.current_price - b.current_price,
    render: (text, record) => {
      const priceDifference = record.current_price - record.initial_price;
      const cellColor = priceDifference >= 0 ? "rgb(60, 179, 113)" : "red";

      return (
        <span style={{ color: cellColor }}>
          {`${text} `}
          {priceDifference >= 0 ? <i className='bi bi-caret-up-fill'></i> : <i className='bi bi-caret-down-fill'></i>}
        </span>
      );
    },
  },
];
