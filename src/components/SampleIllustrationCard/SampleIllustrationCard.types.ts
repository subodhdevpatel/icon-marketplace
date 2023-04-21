import { ComponentPropsWithoutRef } from "react";

export type SampleIllustrationCardType = ComponentPropsWithoutRef<"div"> & {
  title: string;
  imageUrl: string;
  count: number;
};

export type WrapperType = {
  imageUrl: string;
};
