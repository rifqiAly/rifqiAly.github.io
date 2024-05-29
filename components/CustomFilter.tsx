"use client";
import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import utils from "@/utils";

interface Item {
  value: string;
  label: string;
}

const CustomFilter = ({ payload, placeHolder }: any) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([placeHolder]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const router = useRouter();
  const handleUpdateParam = (e: any) => {
    const newPathname = utils.updateParams(placeHolder, e);

    router.push(newPathname, { scroll: false });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="light"
        disallowEmptySelection
        selectionMode="single"
        items={payload}
        selectedKeys={selectedKeys}
        onSelectionChange={(e: any) => setSelectedKeys(e)}
        onAction={(key: any) => handleUpdateParam(key)}
      >
        {(item: Item) => (
          <DropdownItem key={item.value}>{item.label}</DropdownItem>
        )}
      </DropdownMenu>
      days ago
    </Dropdown>
  );
};

export default CustomFilter;
