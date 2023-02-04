import * as React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqAccordian(props: any) {
  // console.log("props", props);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
    <div className="h-80">
    <h2  style={{textAlign:"center",paddingBottom:"10px",color:"#894578",fontSize: "x-large"}}>Cafe FAQs</h2>

      {props?.Question?.map((que: any, index: any) => {
        return (
          <>
            <div>
              <Accordion open={open === index+1}>
                <AccordionHeader onClick={() => handleOpen(index+1)}>
                  {que?.name}
                </AccordionHeader>
                <AccordionBody>{que?.answer}</AccordionBody>
              </Accordion>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}
