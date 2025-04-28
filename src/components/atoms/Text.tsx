import { PropsWithChildren } from "react";
import { Text as NativeText, TextProps } from "react-native";
import clsx from "clsx";
type Kind = "title" | "subtitle" | "body" | "caption" | "small";

type Props = PropsWithChildren<
  {
    kind: Kind;
  } & TextProps
>;

export function Text({ children, kind, className, ...rest }: Props) {
  return (
    <NativeText
      className={clsx(
        "text-tip",
        {
          "font-fbold text-2xl": kind === "title",
          "font-fsemibold text-xl": kind === "subtitle",
          "font-fregular text-base": kind === "body",
          "font-fregular text-sm": kind === "caption",
          "font-fregular text-xs": kind === "small",
        },
        className
      )}
      {...rest}
    >
      {children}
    </NativeText>
  );
}
