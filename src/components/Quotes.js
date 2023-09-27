import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?limit=1&category=money', {
        headers: {
          'X-Api-Key': '417MZ7DAIIDohifAq1HR0g==C8ex0UAh8uWfaqqG',
        },
      });
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <>
      <ul className="quotes">
        {data.map((item) => (
          <li key={item.id}>
            {`${item.quote} -${item.author}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Quotes;
