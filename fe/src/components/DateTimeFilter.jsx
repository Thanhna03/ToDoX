import { options } from "../lib/data";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
} from "./ui/combobox";

const DateTimeFilter = ({dateQuery, setDateQuery }) => {
  return (
    <Combobox items={options}>
      <div className="w-64">
        <ComboboxInput placeholder="Chọn thời gian" />
      </div>

      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.label} value={item.label}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default DateTimeFilter;
