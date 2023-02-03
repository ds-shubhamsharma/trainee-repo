import * as React from "react";

type props = {
  serviceData: any;
};
const Services = (props: any) => {
  const { serviceData } = props;

  return (
    <>
      <>
        <h1 className="text-center mb-10" style={{ color: "#894578" }}>
          Services
        </h1>
        <div className="container ">
          <div className="servicesList service-mid flex flex-wrap gap-y-5">
            {serviceData?.map((Data: any) => (
              <div className="block-content flex w-1/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#894578"
                    d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3Zm-7 4q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v12q0 .825-.587 1.413Q20.825 22 20 22Zm6-16h4V4h-4Z"
                  />
                </svg>
                {Data.label}
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Services;
