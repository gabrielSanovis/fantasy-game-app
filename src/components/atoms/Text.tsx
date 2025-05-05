import { PropsWithChildren } from "react";
import { Text as NativeText, TextProps } from "react-native";
import clsx from "clsx";
type Kind = "extra-condensed" | "title" | "subtitle" | "body" | "caption"  | "caption-bold" | "small";

type Props = PropsWithChildren<
  {
    kind: Kind;
  } & TextProps
>;

export function Text({ children, kind, className, ...rest }: Props) {
  return (
    <NativeText
      className={clsx(`${className}`, {
        "font-extra-condensed text-base": kind === "extra-condensed",
        "font-fbold text-2xl": kind === "title",
        "font-fsemibold text-xl": kind === "subtitle",
        "font-fregular text-base": kind === "body",
        "font-fregular text-sm": kind === "caption",
        "font-fbold text-sm": kind === "caption-bold",
        "font-fregular text-xs": kind === "small",
      })}
      {...rest}
    >
      {children}
    </NativeText>
  );
}
