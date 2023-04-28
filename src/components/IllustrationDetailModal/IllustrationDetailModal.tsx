import { FC, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ColorEditor } from "../ColorEditor/ColorEditor";
import { PlaceHolder } from "./PlaceHolder";

import { ColorOptions } from "../ColorEditor/Colors.data";

import { ExpandIcon, CloseIcon, CheckIcon, UnlockIcon, PencilIcon, DownloadModalIcon, IconInfo, HeartIcon } from "assets/icons";

import Styles from "./IllustrationDetailModal.styles";
import { IllustrationDetailModalType } from "./IllustrationDetailModal.types";

/**
 * Component - IllustrationDetailModal
 */
export const IllustrationDetailModal: FC<IllustrationDetailModalType> = ({ name, tags, isLiked, handleCloseModal }) => {
  const router = useRouter()
  const [activeColor, setActiveColor] = useState(ColorOptions[0])
  const [imageType, setImageType] = useState('svg')

  const features = useMemo(() => ([
    'Download vector icons and illustrations',
    'Control the size of exports assets',
    'Manage your collection folders and team',
    'Change color to match your brand'
  ]), [])

  const downloadSvg = useCallback(() => {
    const data = (document.getElementById('svgData')?.firstChild as HTMLElement)
    const base64doc = btoa(unescape(encodeURIComponent(data.outerHTML)));
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = `download.${imageType}`;
    if (imageType === 'png') {
      const canvas = document.createElement('canvas');

      const w = parseInt(data.getAttribute('width') || '');
      const h = parseInt(data.getAttribute('height') || '');

      const downloadImage = document.createElement('img');
      downloadImage.src = 'data:image/svg+xml;base64,' + base64doc;

      downloadImage.onload = function () {
        canvas.setAttribute('width', w.toString());
        canvas.setAttribute('height', h.toString());
        const context = canvas.getContext("2d");
        context?.drawImage(downloadImage, 0, 0, w, h);
        const dataURL = canvas.toDataURL('image/png');

        a.href = dataURL;
        a.dispatchEvent(e);
      }

    } else {
      a.href = 'data:text/html;base64,' + base64doc;
      a.dispatchEvent(e);
    }

  }, [imageType])

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
                <HeartIcon fill={isLiked ? "red" : undefined}/>
              </Styles.HeartIcon>
            </Styles.BreadCrumbContent>
            <Styles.TitleWrapper>{name}</Styles.TitleWrapper>
            <ColorEditor handleColorChange={(color: string) => handleColorChange(color)} />
            <Styles.DownloadOptions>Download options</Styles.DownloadOptions>
            <Styles.MainWrap>
              <Styles.RadioWrap>
                <Styles.RadioGroup type="radio" name="image_type" value='svg' defaultChecked onChange={() => setImageType('svg')} />
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
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {tags.map((tag, index) =>
                  <span key={`${tag}-${index}`} onClick={() => router.push('/')} className="underline text-sm text-[#141414]">{tag} </span>
                )}
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
            <Styles.CloseButton onClick={() => handleCloseModal()}><CloseIcon /></Styles.CloseButton>
          </Styles.ButtonWrapper>
          <Styles.DescriptionWrapper>
            <Styles.TitleText>Upgrade your free account to access these features</Styles.TitleText>
            {features.map((feature, index) => (
              <Styles.DescriptionText key={`${feature}-${index}`}><CheckIcon /> {feature}</Styles.DescriptionText>
            ))}
          </Styles.DescriptionWrapper>
          <Styles.UnlockAllButton><UnlockIcon /> Unlock all features</Styles.UnlockAllButton>
        </Styles.WrapperRight>
      </Styles.Wrapper>
    </Styles.PreviewWrapper>
  );
};
