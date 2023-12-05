import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Navbar = (props: { setLanguage: Dispatch<SetStateAction<string>> }) => {
  const { setLanguage } = props;
  return (
    <>
      <div className="flex items-center justify-between p-5 h-[5rem] bg-slate-950 border-b-gray-700 border-b-[0.01px]">
        <span className="text-2xl md:text-3xl font-bold text-white">
          CODECRAFT
        </span>
        <div>
          <Select onValueChange={(e) => setLanguage(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">Javascript</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
