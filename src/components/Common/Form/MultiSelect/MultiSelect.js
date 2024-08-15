import { useState } from "react";
import {
  FilterDisplay,
  FilterTitle,
  MultiSelectContainer,
  RemoveIcon,
  SelectedFilters,
  SelectedItem,
  StyledSelect,
} from "./MultiSelect.styles";

const MultiSelect = ({ options, onChange = () => {} }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedItems(selectedOptions);
    onChange(selectedOptions);
  };

  const handleRemoveItem = (item) => {
    const newSelectedItems = selectedItems.filter((i) => i !== item);
    setSelectedItems(newSelectedItems);
    onChange(newSelectedItems);
  };

  return (
    <MultiSelectContainer>
      <StyledSelect
        multiple={true}
        onChange={handleSelectionChange}
        value={selectedItems}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>

      <FilterDisplay>
        <FilterTitle>Selected Filters:</FilterTitle>
        <SelectedFilters>
          {selectedItems.length === 0 ? (
            <span>No filters selected</span>
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
        </SelectedFilters>
      </FilterDisplay>
    </MultiSelectContainer>
  );
};

export default MultiSelect;
