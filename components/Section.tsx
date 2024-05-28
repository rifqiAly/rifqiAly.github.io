"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Catalogues from "./Catalogues";
import Owned from "./Owned";
import Rewards from "./Rewards";
import { dataProps } from "@/types";

const Section = ({data, isDataEmpty}: dataProps) => {
  const [selected, setSelected] = React.useState("catalogues");

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key: any) => setSelected(key)}
        color="primary"
      >
        <Tab key="catalogues" title="Catalogues">
          <Catalogues data={data} isDataEmpty={isDataEmpty}/>
        </Tab>
        <Tab key="owned" title="Owned">
          <Owned />
        </Tab>
        <Tab key="rewards" title="Rewards">
          <Rewards />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Section;
