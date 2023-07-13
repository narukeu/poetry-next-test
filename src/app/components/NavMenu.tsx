// 菜单组件 Luke Na 2023.07.12
import React from "react";

import Image from "next/image";

// 定义一个接口叫做MenuItem，它描述了每个对象的属性和类型
interface MenuItem {
  name: string;
  linkto: string;
}

const NavMenu: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const menuLinks = menuItems.map((item, index) => (
    <li className="my-2">
      <a
        className="text-zinc-500  hover:text--600"
        key={index}
        href={item.linkto}
      >
        {item.name}
      </a>
    </li>
  ));
  return (
    <div className="fixed flex items-center py-4 text-base">
      <div className="mr-8">
        <Image
          alt="logo"
          src="/images/logo.png"
          width="150"
          height="40"
        ></Image>
      </div>
      <ul className="flex space-x-8">{menuLinks}</ul>
    </div>
  );
};

export default NavMenu;
