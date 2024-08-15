import styled from "styled-components";

const MultiSelectContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const StyledSelect = styled.select`
  width: 300px;
  height: 150px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;

  option {
    padding: 10px;
    font-size: 14px;
  }
`;

const FilterDisplay = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
`;

const FilterTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SelectedItem = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const RemoveIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

export {
  MultiSelectContainer,
  StyledSelect,
  RemoveIcon,
  SelectedItem,
  SelectedFilters,
  FilterTitle,
  FilterDisplay,
};
