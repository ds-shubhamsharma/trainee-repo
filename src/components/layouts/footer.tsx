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
      
        <footer className="footer">
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
                      <ul></ul>
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
            {/* <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t justify-center">
              <div className="sm:w-full px-4 md:w-1/6">
                <strong className="hover:text-header-cta-bg-color">Deno</strong>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                  Address

                </h6>
                <address className="not-italic mb-4 text-sm hover:text-header-cta-bg-color">
                  6 KHA.
                  <br />
                  Raja park 302004
                </address>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                  WebDevelopment
                </h6>
                <p className="mb-4 text-sm hover:text-header-cta-bg-color">
                  our services all type{" "}
                  <strong className="hover:text-header-cta-bg-color">
                    FREE
                  </strong>
                  .<br />
                </p>
              </div>
              <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                <button
                  style={{ backgroundColor: "#894578" }}
                  className="button before-icon ml-2"
                >
                  Get Details
                </button>
              </div>
            </div> */}
          </div>
        </footer>
    
    </>
  );
};

export default Footer;
