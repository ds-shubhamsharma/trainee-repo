import * as React from "react";

type props = {
  serviceData: any;
};
const Services = (props: any) => {
  const { serviceData } = props;
  // console.log("serviceTitle", serviceData);

  const data = serviceData.map((element: any) => {
    return <>{element.label}</>;
  });

  return (
    <>
      <div className="space-y-5 mt-[50px] ">
        {/* <div className="text-xl font-semibold ">Photo Gallery</div> */}
        <h2
          className="text-xl font-semibold mb-8"
          style={{ textAlign: "center", color: "#894578" }}
        >
          Services
        </h2>

        <div className="grid space-x-5 md:grid-cols-2 lg:grid-cols-3 text-xl">
          {data}
        </div>
      </div>
    </>
  );
};

export default Services;
