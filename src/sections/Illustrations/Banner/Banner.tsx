import Image from 'next/image'

import { CreditDownload } from 'components/CreditDownload/CreditDownload'

import GlobalIssue from 'assets/images/globalIssue.png'
import TaskManagement from 'assets/images/taskManagement.png'
import OrderShippingPackage from 'assets/images/orderShippingPackage.png'
import { LockUnlockedIcon, PencilIcon, FlatIcon, ArcIcon } from 'assets/icons'

import Styles from "./Banner.styles"

/**
 * Component - Banner
 */
export const Banner = () => {
    return (
        <Styles.Wrapper>
            <Styles.WrapperLeft>
                <Styles.WrapperLeftTop>
                    <Styles.ContentWrapper>
                        <Styles.HeaderText>
                            Dream illustrations
                        </Styles.HeaderText>
                        <Styles.SubText>
                            89 Vector illustrations
                        </Styles.SubText>
                        <Styles.IconWrapper>
                            <Styles.ImgWrap>
                                <Styles.SvgContent>SVG</Styles.SvgContent>
                                <Styles.PngContent>PNG</Styles.PngContent>
                            </Styles.ImgWrap>
                            <Styles.ImgWrap>
                                <FlatIcon />
                                <Styles.FlatText>Flat style</Styles.FlatText>
                            </Styles.ImgWrap>
                            <Styles.ImgWrap>
                                <ArcIcon />
                                <Styles.VectorText>Vector</Styles.VectorText>
                            </Styles.ImgWrap>
                        </Styles.IconWrapper>
                        <Styles.ContentDesc>
                            Artistic, simplified and meaningful. This is what we aimed for while drawing these illustrations, the over all look and feel is flat but when you go into the details you’ll notice that the characters and scenes are illustrated using outlines and negative space. This pack took a lot of time and effort to create ✨
                        </Styles.ContentDesc>
                        <Styles.ParaContent>
                            Dream illustrations is your go to pack if you need pictograms that will breath life into your designs. Every scene is created using 2 primary colors and 1 accent color for background, feel free to change the accent color to fit any design you have or just remove the geometrical shapes containing the illustrations to emphasis the negative space.
                        </Styles.ParaContent>
                        <Styles.ParaContent>
                            All illustrations are fully editable and delivered as vector Ai files, Editable SVG, PNG and ready to use Figma, Sketch, Adobe XD and Iconjar libraries.
                        </Styles.ParaContent>
                    </Styles.ContentWrapper>
                    <Styles.ImageContent>
                        <Image src={OrderShippingPackage} alt="order-shipping-package" />
                    </Styles.ImageContent>
                </Styles.WrapperLeftTop>
                <Styles.WrapperLeftBottom>
                    <Styles.ImageWrapper>
                        <Image src={GlobalIssue} alt="global-issue" />
                    </Styles.ImageWrapper>
                    <Styles.ImageWrapper>
                        <Image src={TaskManagement} alt="task-management" />
                    </Styles.ImageWrapper>
                </Styles.WrapperLeftBottom>
            </Styles.WrapperLeft>
            <Styles.WrapperRight>
                <CreditDownload />
                <Styles.UltimateAccessWrapper>
                    <LockUnlockedIcon />
                    Ultimate access download
                </Styles.UltimateAccessWrapper>
                <Styles.CompareWrapper>
                    <Styles.IllustrationsCount>
                        {`${89} Illustrations`}
                    </Styles.IllustrationsCount>
                    <Styles.GetIllustrationsCountWrapper>
                        <span>By</span>
                        <PencilIcon />
                        <a>Getillustrations</a>
                    </Styles.GetIllustrationsCountWrapper>
                    <Styles.CompatibleText>
                        <h5>Compatible with</h5>
                        <p>
                            Figma, Sketch, Illustrator, Sketch, Iconjar
                        </p>
                    </Styles.CompatibleText>
                    <Styles.commercialText>
                        <span>Commercial usage license - </span>
                        <a>License types</a>
                    </Styles.commercialText>

                </Styles.CompareWrapper>
                <Styles.ServicerWrap>
                    <h5>Need custom design?</h5>
                    <p>We're ready to customize this product or create exclusive custom designs tailored to your business. </p>
                    <span><i>Lighting fast and made from scratch.</i></span>
                    <Styles.BtnWrap>
                        Custom design services
                    </Styles.BtnWrap>
                </Styles.ServicerWrap>
            </Styles.WrapperRight>
        </Styles.Wrapper>
    )
}