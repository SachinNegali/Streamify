import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DropdownProps } from "@/types/componentTypes";

const DropDownSelect = ({
  value,
  onValueChange,
  options,
  defaultOption,
  label,
}: DropdownProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className="w-[160px] rounded-lg sm:ml-auto"
        aria-label={label}
      >
        <SelectValue placeholder={defaultOption} />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        {options.map(({ label, value }) => (
          <SelectItem value={value} className="rounded-lg" key={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDownSelect;
