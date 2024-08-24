import { useState } from "react";
import Header from "./Header";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

function App() {
  const [isShowTab1, setIsShowTab1] = useState(true);
  const [isShowTab2, setIsShowTab2] = useState(false);
  const [isShowTab3, setIsShowTab3] = useState(false);
  const [isShowTab4, setIsShowTab4] = useState(false);

  const changePage = (number) => {
    setIsShowTab1(false);
    setIsShowTab2(false);
    setIsShowTab3(false);
    setIsShowTab4(false);

    {
      switch (number) {
        case "1":
          setIsShowTab1(true);
          setIsShowTab2(false);
          setIsShowTab3(false);
          setIsShowTab4(false);
          break;
        case "2":
          setIsShowTab1(false);
          setIsShowTab2(true);
          setIsShowTab3(false);
          setIsShowTab4(false);
          break;
        case "3":
          setIsShowTab2(false);
          setIsShowTab2(false);
          setIsShowTab3(true);
          setIsShowTab4(false);
          break;
        case "4":
          setIsShowTab1(false);
          setIsShowTab2(false);
          setIsShowTab3(false);
          setIsShowTab4(true);
          break;
      }
    }
  };

  return (
    <>
      <Header changePage={changePage} />
      <Tab1 data1={isShowTab1} />
      <Tab2 data2={isShowTab2} />
      <Tab3 data3={isShowTab3} />
      <Tab4 data4={isShowTab4} />
    </>
  );
}

export default App;
