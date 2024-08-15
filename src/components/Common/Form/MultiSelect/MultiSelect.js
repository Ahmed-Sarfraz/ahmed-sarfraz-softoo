import { useState } from "react";
import {
  ClearButton,
  Dropdown,
  MultiSelectWrapper,
  NoOptions,
  Option,
  Placeholder,
  RemoveIcon,
  SearchBox,
  SelectBox,
  SelectedItem,
} from "./MultiSelect.styles";
const MultiSelect = ({
  options,
  placeholder = "Select...",
  onChange = () => {},
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (item) => {
    if (!selectedItems.includes(item)) {
      const newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      onChange(newSelectedItems);
    }
  };

  const handleRemoveItem = (item) => {
    const newSelectedItems = selectedItems.filter((i) => i !== item);
    setSelectedItems(newSelectedItems);
    onChange(newSelectedItems);
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedItems.includes(option)
  );

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const clearSelection = () => {
    setSelectedItems([]);
    onChange([]);
  };

  return (
    <MultiSelectWrapper>
      <SelectBox onClick={toggleDropdown}>
        {selectedItems.length === 0 ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : (
          selectedItems.map((item) => (
            <SelectedItem key={item}>
              {item}
              <RemoveIcon onClick={() => handleRemoveItem(item)}>
                &times;
              </RemoveIcon>
            </SelectedItem>
          ))
        )}
        {selectedItems.length > 0 && (
          <ClearButton
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
          >
            Clear
          </ClearButton>
        )}
      </SelectBox>
      {isOpen && (
        <Dropdown>
          <SearchBox
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <Option key={option} onClick={() => handleSelectItem(option)}>
                {option}
              </Option>
            ))
          ) : (
            <NoOptions>No options available</NoOptions>
          )}
        </Dropdown>
      )}
    </MultiSelectWrapper>
  );
};

export default MultiSelect;
