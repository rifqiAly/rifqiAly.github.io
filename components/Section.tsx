'use client'
import React from "react"
import { Tabs, Tab } from "@nextui-org/react";
import Catalogues from "./Catalogues";
import Owned from "./Owned";
import Rewards from "./Rewards";

const Section = () => {
    return (
        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <Tabs aria-label="Options"
                color="primary">
                <Tab key="catalogues" title="Catalogues">
                    <Catalogues />
                </Tab>
                <Tab key="owned" title="Owned">
                    <Owned />
                </Tab>
                <Tab key="rewards" title="Rewards">
                    <Rewards />
                </Tab>
            </Tabs>
           
        </div>
    )
}

export default Section