import React, { Component } from "react";
import { StyledDropdown } from "src/components/Common/Form/MultiSelect/MultiSelect.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

type State = {
  isOpen: boolean;
};

export default class Dropdown extends Component<ChildrenNodeProps, State> {
  constructor(props: ChildrenNodeProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      ...this.state,
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      isOpen && (
        <StyledDropdown data-testid="select-dropdown">
          {children}
        </StyledDropdown>
      )
    );
  }
}
