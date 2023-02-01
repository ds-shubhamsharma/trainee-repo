import * as React from "react";
import BannerSlide from "./bannerSlide";
import Footer from "./footer";
import Header from "./header";


type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
};

const PageLayout = ({ title, _site, global, children }: Props) => {
  return (
    <>
      <Header
        headerLogo={global.c_headerLogo.headerLogo}
        headerLinks={global.c_navigationLink}
      />
      <BannerSlide />
      {children}
      <Footer
        footerServices={global.c_footerServices}
        getHelps={global.c_getHelps}
        moreStuff={global.c_moreStuff}
        onlineShop={global.c_onlineShop}
      />
    </>
  );
};

export default PageLayout;
