import { ComponentPropsWithoutRef } from "react";

export type IconsCardType = ComponentPropsWithoutRef<"div"> & {
  title: string;
  imageUrl: string;
  count: number;
  isLiked: boolean
};

export type WrapperType = {
  imageUrl: string;
};
