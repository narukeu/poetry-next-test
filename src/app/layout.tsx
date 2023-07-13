import React from "react";
import "./globals.css";
import type { Metadata } from "next";

import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

import FooterLinks from "./locales/zh-CN/FooterLinks.json";
import menuData from "./locales/zh-CN/NavMenu.json";

export const metadata: Metadata = {
  title: "开放，包容，细致，坚守 ———— 玟茵开源社区",
  description: "Opensource community for develop Open softwares",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="zh">
      <link rel="icon" href="/favicon.png" />
      <body className="w-4/5">
        {/* 网站依赖 JS，否则会出现异常，因此给出一个提示 */}
        <noscript>
          <div className="m-1 w-full">
            The browser seems to have JavaScript disabled, so accessing this
            website may result in abnormal behavior.
          </div>
        </noscript>
        <header>
          <NavMenu menuItems={menuData} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer footerData={FooterLinks} />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
