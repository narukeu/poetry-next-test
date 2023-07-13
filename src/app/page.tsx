import Fourpics from "./components/Fourpics"; // 组件
import IntroHead from "./components/IntroHead";
import AccordionPanel from "./components/AccordionPanel";
import GridItems from "./locales/zh-CN/Home/Fourpics.json"; // 字符串数据


import IHeaderItems from "./locales/zh-CN/Home/MainTitle.json";


import accData from "./locales/zh-CN/Home/Characteristic.json";

const Home = () => {
  return (
    <div className="">
      <IntroHead IHeaderItems={IHeaderItems} />
      <Fourpics gridItems={GridItems} />
      <AccordionPanel accData={accData} />
    </div>
  );
};

export default Home;
