import { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const colors = [
  { value: "blue", label: "blue", bgClass: "bg-blue-500" },
  { value: "green", label: "green", bgClass: "bg-green-500" },
];

const ColorSelect: FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    "green"
  );

  const handleValueChange = (value: string) => {
    setSelectedColor(value);
  };

  const selectedColorObj = colors.find(
    (color) => color.value === selectedColor
  );

  return (
    <div className="space-y-4">
      <p>Select a color:</p>
      <Select.Root value={selectedColor} onValueChange={handleValueChange}>
        <Select.Trigger className="inline-flex items-center justify-between w-[200px] px-3 py-2 text-sm bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Select.Value>
            {selectedColorObj ? (
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${selectedColorObj.bgClass}`}
                />
                {selectedColorObj.label}
              </div>
            ) : (
              "Select a color"
            )}
          </Select.Value>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={5}
            align="center"
            className="overflow-hidden bg-white shadow-lg border border-gray-200 min-w-[200px]"
          >
            <Select.Viewport className="p-1">
              {colors.map((color) => (
                <Select.Item
                  key={color.value}
                  value={color.value}
                  className="relative flex items-center px-6 py-2 text-sm rounded-sm hover:bg-gray-100 focus:outline-none select-none data-[highlighted]:bg-gray-100 cursor-pointer"
                >
                  <Select.ItemIndicator className="absolute left-1">
                    <Check className="h-4 w-4" />
                  </Select.ItemIndicator>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${color.bgClass}`} />
                    {color.label}
                  </div>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default ColorSelect;
