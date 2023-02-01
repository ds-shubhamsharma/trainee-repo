import * as React from "react";
import "..//../assets/css/footerCss.css";

type props = {
  footerServices: any;
  getHelps: any;
  moreStuff: any;
  onlineShop: any;
};
const Footer = (props: any) => {
  const { footerServices, getHelps, moreStuff, onlineShop } = props;

  return (
    <>
      {/* <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="footer-col">
              {footerServices?.map((service: any) => {
                return (
                  <>
                    <h3>
                      {" "}
                      <a href="#">{service.label}</a>{" "}
                    </h3>
                  </>
                );
              })}
            </div>
            <div className="footer-col">
              {getHelps?.map((getHelp: any) => {
                return (
                  <>
                    <h3>
                      {" "}
                      <a href="#">{getHelp.label}</a>{" "}
                    </h3>
                  </>
                );
              })}
            </div>
            <div className="footer-col">
              {onlineShop?.map((onlineShops: any) => {
                return (
                  <>
                    <h3>
                      {" "}
                      <a href="#">{onlineShops.label}</a>{" "}
                    </h3>
                  </>
                );
              })}
            </div>
            <div className="footer-col">
              {moreStuff?.map((moreStuffs: any) => {
                return (
                  <>
                    <h3 className="">
                      {" "}
                      <a href="#"> {moreStuffs.label}</a>
                    </h3>
                  </>
                );
              })}
            </div>
          </div>
          
        </div>
      </footer> */}

      <footer className="footer-1 bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 gap-20">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <ul className="list-none footer-links">
                <li className="mb-2" >
                  {footerServices?.map((service: any) => {
                    return (
                      <>
                        <h3>
                          {" "}
                          <a href="#" style={{ color: "white" }}>
                            {service.label}
                          </a>{" "}
                        </h3>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <ul className="list-none footer-links">
                <li className="mb-2">
                  {getHelps?.map((getHelp: any) => {
                    return (
                      <>
                        <h3>
                          {" "}
                          <a style={{ color: "white" }} href="#">
                            {getHelp.label}
                          </a>{" "}
                        </h3>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <ul className="list-none footer-links">
                <li className="mb-2">
                  {onlineShop?.map((onlineShops: any) => {
                    return (
                      <>
                        <h3>
                          {" "}
                          <a style={{ color: "white" }} href="#">
                            {onlineShops.label}
                          </a>{" "}
                        </h3>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <ul className="list-none footer-links">
                <li className="mb-2">
                  {moreStuff?.map((moreStuffs: any) => {
                    return (
                      <>
                        <h3 className="">
                          {" "}
                          <a style={{ color: "white" }} href="#">
                            {" "}
                            {moreStuffs.label}
                          </a>
                        </h3>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
