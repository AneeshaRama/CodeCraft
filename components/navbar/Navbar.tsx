import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 h-[5rem] bg-slate-950 border-b-gray-700 border-b-[0.01px]">
        <span className="text-2xl md:text-3xl font-bold text-white">
          CODECRAFT
        </span>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="node">Javascript</SelectItem>
            </SelectContent>
          </Select>
          <Button className="md:hidden" variant={"run"}>
            Run
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
