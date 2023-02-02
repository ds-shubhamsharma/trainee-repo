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
      {props?.Question?.map((que: any, index: any) => {
        return (
          <>
            <div>
              <Accordion open={open === index}>
                <AccordionHeader onClick={() => handleOpen(index)}>
                  {que?.name}
                </AccordionHeader>
                <AccordionBody>{que?.answer}</AccordionBody>
              </Accordion>
            </div>
          </>
        );
      })}
    </>
  );
}
