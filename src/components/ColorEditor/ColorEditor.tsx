import { ColorOptions } from "./Colors.data";

import { ColorEditorType } from "./ColorEditor.types";
import Styles from "./ColorEditor.styles";
import { FC } from "react";

export const ColorEditor:FC<ColorEditorType> = ({handleColorChange}) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>Color Editor</Styles.Title>
      <Styles.ColorOptions>
        {ColorOptions.map((color: string) => (
          <Styles.ColorOption color={color} onClick={() => handleColorChange(color)}></Styles.ColorOption>
        ))}
      </Styles.ColorOptions>
    </Styles.Wrapper>
  );
};
