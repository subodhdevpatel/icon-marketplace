import { FC } from "react";

import { SampleIllustrationCardType } from "./SampleIllustrationCard.types";
import Styles from "./SampleIllustrationCard.styles";

export const SampleIllustrationCard: FC<SampleIllustrationCardType> = (
  props
) => {
  const { title, count, imageUrl } = props;

  return (
    <Styles.Wrapper imageUrl={imageUrl}>
      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Count>{count}</Styles.Count>
      </Styles.Content>
    </Styles.Wrapper>
  );
};
