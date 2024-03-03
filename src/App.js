import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { img, logo } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Space Grotesk', sans-serif",
    logo: logo,

    img: img,

    primaryColor: "#FE802E",
    secondaryColor: "#FFFFFF",
    accentColor: "#1B1B1B",
    heading: "We are <br/> hiring",

    positions: {
      title: "Positions:",
      data: [
        "Accounting Coordinator",
        "Business Development Staff",
        "Research and Development Staff",
        "Quality Control Officier",
      ],
    },
    submitCv: {
      label: "Submit CV",
      email: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
