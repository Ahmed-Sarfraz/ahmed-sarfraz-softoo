import { ButtonProps, InputProps } from "src/interfaces/FormElementsProps";
import styled from "styled-components";

const MultiSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
  font-family: Arial, sans-serif;
`;

const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const SelectedItem = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const RemoveIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  z-index: 20;
  max-height: 200px;
  overflow-y: auto;
`;

const SearchBox = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const NoOptions = styled.div`
  padding: 10px;
  color: #999;
  text-align: center;
`;

const Placeholder = styled.div`
  color: #999;
  font-size: 14px;
  padding: 5px;
  user-select: none;
`;

const ClearButton = styled.button<ButtonProps>`
  margin-left: auto;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  ClearButton,
  Placeholder,
  NoOptions,
  Option,
  SearchBox,
  SelectedItem,
  SelectBox,
  RemoveIcon,
  StyledDropdown,
  MultiSelectWrapper,
};
