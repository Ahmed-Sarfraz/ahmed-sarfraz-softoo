import React, { useState } from "react";
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

// Define the interface for props
type MultiSelectProps = {
  options?: string[];
  placeholder?: string;
  onChange?: (selectedItems: string[]) => void;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options = [],
  placeholder = "Select...",
  onChange = () => {},
  ...props
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      const newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      onChange(newSelectedItems);
    }
  };

  const handleRemoveItem = (item: string) => {
    const newSelectedItems = selectedItems.filter((i) => i !== item);
    setSelectedItems(newSelectedItems);
    onChange(newSelectedItems);
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedItems.includes(option)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const clearSelection = () => {
    setSelectedItems([]);
    onChange([]);
  };

  return (
    <MultiSelectWrapper>
      <SelectBox onClick={toggleDropdown} {...props}>
        {selectedItems.length === 0 ? (
          <Placeholder data-testid={placeholder}>{placeholder}</Placeholder>
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
            data-testid="clear-selected"
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
        <Dropdown data-testid="select-dropdown">
          <SearchBox
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <Option
                data-testid={`option-${option}`}
                key={option}
                onClick={() => handleSelectItem(option)}
              >
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
