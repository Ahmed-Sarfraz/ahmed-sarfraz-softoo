import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: inline-block;
`;

export const TooltipText = styled.span<{
  position: { top?: string; bottom?: string; left?: string; right?: string };
}>`
  visibility: hidden;
  width: max-content;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px 5px;
  position: absolute;
  z-index: 10;
  transition: visibility 0.2s ease-in-out;

  ${({ position }) =>
    position &&
    `
    ${position.top ? `top: ${position.top};` : ""}
    ${position.bottom ? `bottom: ${position.bottom};` : ""}
    ${position.left ? `left: ${position.left};` : ""}
    ${position.right ? `right: ${position.right};` : ""}
  `}

  ${TooltipWrapper}:hover & {
    visibility: visible;
  }
`;
