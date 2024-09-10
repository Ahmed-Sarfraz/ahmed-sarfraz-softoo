import React from "react";
import { PositionKeys, TooltipProps } from "src/interfaces/Tooltip";
import {
  TooltipText,
  TooltipWrapper,
} from "src/components/Common/Tooltip/Tooltip.styles";

const positions: Record<
  PositionKeys,
  { top?: string; bottom?: string; left?: string; right?: string }
> = {
  topStart: { bottom: "60px", left: "0" },
  topEnd: { bottom: "60px", right: "0" },
  rightStart: { bottom: "60px", right: "0" },
  rightEnd: { top: "60px", right: "0" },
  bottomStart: { top: "60px", left: "0" },
  bottomEnd: { top: "60px", right: "0" },
  leftStart: { bottom: "60px", left: "0" },
  leftEnd: { top: "60px", left: "0" },
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  className = "",
  text,
  position = "bottomEnd",
  ...props
}) => {
  return (
    <TooltipWrapper {...props} className={`tooltip ${className}`}>
      {children}
      <TooltipText className="tooltiptext" position={positions[position]}>
        {text}
      </TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
