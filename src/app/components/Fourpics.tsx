import React from "react";

interface GridItem {
  title: string;
  view: string;
  img: string;
}

const Fourpics: React.FC<{ gridItems: GridItem[] }> = ({ gridItems }) => {
  const renderGridItems = () => {
    return gridItems.map((item, index) => (
      <div className="fade shadow-xl m-6 w-64 p-4 justify-center" key={index}>
        <img
          className="rounded-md m-auto my-3 items-center w-30"
          src={item.img}
          alt={item.title}
        />
        <div>
          <div className="m-auto my-1.5 text-2xl font-bold items-center text-center">
            {item.title}
          </div>
          <div className="m-auto my-1 text-base text-slate-500 items-center text-center">
            {item.view}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div id="grid" className="flex justify-center flex-wrap">
      {renderGridItems()}
    </div>
  );
};

export default Fourpics;
