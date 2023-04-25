import { FC } from "react";

import { IconsCardType } from "./IconsCard.types";
import Styles from "./IconsCard.styles";
import { HeartIcon } from "assets/icons";
import Image from 'next/image'

import IconWrapper from 'assets/images/IconWrapper.png'

export const IconsCard: FC<IconsCardType> = (
  props
) => {
  const { title, count, imageUrl } = props;

  return (
    <Styles.Wrapper imageUrl={imageUrl}>
      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <Styles.CommentWrapper>
            <Styles.HeartIconWrapper>
                <HeartIcon />
            </Styles.HeartIconWrapper>
            <Styles.Count>{count}</Styles.Count>
        </Styles.CommentWrapper>
      </Styles.Content>
        <Styles.ImageWrap>
            <Image src={IconWrapper} alt="" />
        </Styles.ImageWrap>
    </Styles.Wrapper>
  );
};
