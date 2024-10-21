import axios from "axios";
import { useState, useEffect } from "react";
import MosaicMain from "./components/MosaicMain";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/companies-lookup.json");
        setData(response.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div id="app">
        <MosaicMain data={data} />
      </div>
    </>
  );
}

export default App;
