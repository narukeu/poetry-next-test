// 页脚的组件 Luke Na 2023.07.22
import React from "react";

interface FooterData {
  mainTitle: string;
  links: FooterLink[];
}

interface FooterLink {
  linkTitle: string;
  linkTo: string;
}

const Footer: React.FC<{ footerData: FooterData[] }> = ({ footerData }) => {
  const currentYear = new Date().getFullYear();

  const renderLinks = (links: FooterLink[]) => {
    return links.map((link, index) => (
      <li className="my-1" key={index}>
        <a href={link.linkTo}>{link.linkTitle}</a>
      </li>
    ));
  };

  const renderFooterMenu = () => {
    return footerData.map((item, index) => (
      <div className="mx-2 max-w-xl" key={index}>
        <div className="text-zinc-400 text-xl font-bold">{item.mainTitle}</div>
        <ul className="my-2 text-base text-zinc-500">
          {renderLinks(item.links)}
        </ul>
      </div>
    ));
  };

  return (
    <div className="flex flex-col p-5">
      <div className="flex mx-4 justify-between">{renderFooterMenu()}</div>
      <div className="m-auto text-center text-base text-zinc-500">
        {`由 React.js 强力驱动。 Copyright © 2013-${currentYear} Wenyin Open Source Community`}
      </div>
    </div>
  );
};

export default Footer;
