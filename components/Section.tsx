'use client'
import React from "react"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Catalogues from "./Catalogues";
import Owned from "./Owned";
import Rewards from "./Rewards";

const Section = () => {
    return (
        <Tabs aria-label="Options"
            color="secondary">
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
    )
}

export default Section