import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../atoms/Text";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type Kind = "primary" | "secondary" | "outline" | "disabled";
type Size = "small" | "medium" | "large";

type Props = PropsWithChildren<
  { kind: Kind; size?: Size } & TouchableOpacityProps
>;

export function Button({
  children,
  kind = "primary",
  activeOpacity = 0.7,
  size = "large",
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      className={clsx("rounded-xl items-center justify-center", {
        "bg-primary": kind === "primary",
        "bg-secondary_accent": kind === "secondary",
        "border-2 border-primary bg-transparent": kind === "outline",
        "bg-secondary_text": kind === "disabled",
        "py-1 px-2": size === "small",
        "py-2 px-3": size === "medium",
        "py-3 px-4": size === "large",
      })}
      {...rest}
    >
      <Text
        kind="title"
        className={clsx("text-white", {
          "text-primary": kind === "outline",
        })}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
