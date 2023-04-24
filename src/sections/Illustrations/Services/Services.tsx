import Styles from "./Services.styles"
import Image from 'next/image'
import FidoImg from 'assets/images/Fido.png'
import UserProfile from 'assets/images/UserProfile.png'
import { ImageIcon, PackageIcon, UsersIcon } from "assets/icons";


/**
 * Sections - Services
 */
export const Services = () => {
    return (
        <Styles.Wrapper>
            <Styles.ServiceWrap>
                <Styles.DesignService>
                    <h5>Need more customized assets</h5>
                    <h2>Custom design services</h2>
                    <h4>Tailored to your brand</h4>
                    <p>Unique <strong>vector UI assets</strong> created to fit your branding. 
                    For interfaces, ads, social networks, mobile apps, printing, and branding merchandise… 
                    stand out of the competition</p>
                    <Styles.BtnStorm>
                      Brainstorm with us
                    </Styles.BtnStorm>
                </Styles.DesignService>
                <Styles.ContentWrap>
                        <Styles.ServiveAds>
                                <Styles.Testimonial>
                                        <Styles.Quote>
                                        Amazing service, my illustrations got delivered exactly as specified within 1 day!
                                        </Styles.Quote>
                                        <Styles.UserInfo>
                                            <Styles.UserText>
                                            <p>Naveen Dhanapal</p> 
                                            <p>UI/UX Designer</p>
                                            </Styles.UserText>
                                            <Image src={UserProfile} alt="" />
                                        </Styles.UserInfo>
                                </Styles.Testimonial>
                                <Image src={FidoImg } alt="" />
                        </Styles.ServiveAds>
                        <Styles.ServiceContainer>
                        <Styles.ServiceBox>
                            <ImageIcon />
                            <h5>Fast delivery</h5>
                            <p>Once downloaded, it's yours to keep forever and reuse</p>
                        </Styles.ServiceBox>
                        <Styles.ServiceBox>
                            <UsersIcon />
                            <h5>Copyright transfer</h5>
                            <p>12 Creative designers mixing up their styles together</p>
                        </Styles.ServiceBox>
                        <Styles.ServiceBox>
                            <PackageIcon />
                            <h5>Custom tailored</h5>
                            <p>New assets released weekly, old assets updated daily</p>
                        </Styles.ServiceBox>
                        </Styles.ServiceContainer>
                </Styles.ContentWrap>
            </Styles.ServiceWrap>
        </Styles.Wrapper>
    )
}