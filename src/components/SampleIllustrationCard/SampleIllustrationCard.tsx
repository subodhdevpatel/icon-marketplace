import { FC } from "react";

import { SampleIllustrationCardType } from "./SampleIllustrationCard.types";
import Styles from "./SampleIllustrationCard.styles";
import Image from 'next/image'

import RawIconsSet1 from 'assets/images/RawIconsSet1.png'
import RawIconsSet2 from 'assets/images/RawIconsSet2.png'
import RawIconsSet3 from 'assets/images/RawIconsSet3.png'
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
      <Styles.ImageWrap>
        <Styles.ImageScale>
          <Image src={RawIconsSet1} alt="" />
        </Styles.ImageScale>
        <Styles.ImageSmallWrapper>
          <Styles.ImgIcon>
            <Image src={RawIconsSet2} alt="" />
          </Styles.ImgIcon>
          <Styles.ImgIcon>
          <Image src={RawIconsSet3} alt="" />
          </Styles.ImgIcon>
        </Styles.ImageSmallWrapper>
      </Styles.ImageWrap>
    </Styles.Wrapper>
  );
};
