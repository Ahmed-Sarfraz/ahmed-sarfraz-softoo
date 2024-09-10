import { HTMLAttributes, ReactNode } from "react";

export type PositionKeys =
  | "topStart"
  | "topEnd"
  | "rightStart"
  | "rightEnd"
  | "bottomStart"
  | "bottomEnd"
  | "leftStart"
  | "leftEnd";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  text: string;
  position?: PositionKeys;
}
