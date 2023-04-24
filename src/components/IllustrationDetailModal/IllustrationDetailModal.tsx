import { ColorEditor } from "../ColorEditor/ColorEditor";

import { PlaceHolder } from "./PlaceHolder";
import { ColorOptions } from "../ColorEditor/Colors.data";

import Styles from "./IllustrationDetailModal.styles";
import { useCallback, useState } from "react";
import { ExpandIcon, CloseIcon, CheckIcon, UnlockIcon, PencilIcon, DownloadModalIcon,IconInfo } from "assets/icons";

/**
 * Component - IllustrationDetailModal
 */
const IllustrationDetailModal = () => {
  const [activeColor, setActiveColor] = useState(ColorOptions[0])
  const [imageType, setImageType] = useState('svg')

  const downloadSvg = () => {
    const data = (document.getElementById('svgData')?.firstChild as HTMLElement)
    console.log('data', data)
    const base64doc = btoa(unescape(encodeURIComponent(data.outerHTML)));
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = `download.${imageType}`;
    a.href = 'data:text/html;base64,' + base64doc;
    a.dispatchEvent(e);
  }

  const handleColorChange = useCallback((color: string) => {
    setActiveColor(color)
  }, [])
  return (
    <Styles.PreviewWrapper>
      <Styles.Wrapper>
        <Styles.WrapperLeft>
          <Styles.ImgWrapper id="svgData">
            <PlaceHolder fill={activeColor} />
          </Styles.ImgWrapper>
          <Styles.ContentWrapper>
            <Styles.BreadCrumbContent>

              <Styles.BreadCrumb>
                <PencilIcon />
                <span><strong>Illustrations</strong></span> <span> {'>'} </span>  <span>Essential illustrations</span>
              </Styles.BreadCrumb>
              <Styles.HeartIcon>
                <PencilIcon />
              </Styles.HeartIcon>
            </Styles.BreadCrumbContent>
            <Styles.TitleWrapper>Success road</Styles.TitleWrapper>
            <ColorEditor handleColorChange={(color: string) => handleColorChange(color)} />
            <Styles.DownloadOptions>Download options</Styles.DownloadOptions>
            <Styles.MainWrap>
              <Styles.RadioWrap>
                <Styles.RadioGroup type="radio" name="image_type" value='svg' onChange={() => setImageType('svg')} />
                <Styles.Label>SVG <span>(editable vector)</span> </Styles.Label>
              </Styles.RadioWrap>
              <Styles.RadioWrap>
                <Styles.RadioGroup type="radio" name="image_type" value='png' onChange={() => setImageType('png')} />
                <Styles.Label>PNG</Styles.Label>
                <Styles.Input type="number" placeholder="1000 px"></Styles.Input>
              </Styles.RadioWrap>
            </Styles.MainWrap>
            <Styles.Button onClick={downloadSvg}> <DownloadModalIcon /> Download</Styles.Button>
            <Styles.Tags>
                <h5 className="text-base font-bold mb-2">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="underline text-sm text-[#141414]">success </span>
                  <span className="underline text-sm text-[#141414]">business </span>
                  <span className="underline text-sm text-[#141414]">travel </span>
                  <span className="underline text-sm text-[#141414]">exploration </span>
                  <span className="underline text-sm text-[#141414]">creative </span>
                  <span className="underline text-sm text-[#141414]">dream </span>
                  <span className="underline text-sm text-[#141414]">man </span>
                  <span className="underline text-sm text-[#141414]">happy </span>
                  <span className="underline text-sm text-[#141414]">essential </span>
                  <span className="underline text-sm text-[#141414]">competition </span>
                </div>
            </Styles.Tags>
            <Styles.Information>
            <IconInfo /> Commercial use license | Free PNG license attribution required
            </Styles.Information>
          </Styles.ContentWrapper>
        </Styles.WrapperLeft>
        <Styles.WrapperRight>
          <Styles.ButtonWrapper>
            <Styles.FullScreenButton><ExpandIcon /></Styles.FullScreenButton>
            <Styles.CloseButton><CloseIcon /></Styles.CloseButton>
          </Styles.ButtonWrapper>
          <Styles.DescriptionWrapper>
            <Styles.TitleText>Upgrade your free account to access these features</Styles.TitleText>
            <Styles.DescriptionText><CheckIcon /> Download vector icons and illustrations</Styles.DescriptionText>
            <Styles.DescriptionText><CheckIcon /> Control the size of exports assets</Styles.DescriptionText>
            <Styles.DescriptionText><CheckIcon /> Manage your collection folders and team</Styles.DescriptionText>
            <Styles.DescriptionText><CheckIcon /> Change color to match your brand</Styles.DescriptionText>
          </Styles.DescriptionWrapper>
          <Styles.UnlockAllButton><UnlockIcon /> Unlock all features</Styles.UnlockAllButton>
        </Styles.WrapperRight>
      </Styles.Wrapper>
    </Styles.PreviewWrapper>
  );
};

export default IllustrationDetailModal;
