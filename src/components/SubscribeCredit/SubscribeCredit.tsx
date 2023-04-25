import Image from 'next/image'

import OptionsTagArrow from 'assets/images/OptionsTagArrow.png'
import Styles from "./SubscribeCredit.styles"
import { HeadTagIcon } from 'assets/icons'
/**
 * Component - SubscribeCredit
 */
export const SubscribeCredit = () => {
    return (
        <Styles.Wrapper>
            <Styles.WrapperLeft>
                Pro
            </Styles.WrapperLeft>

            <Styles.WrapperRight>
                <Styles.AccessWrap>
                    <div className='flex flex-col items-end justify-center' >
                        <h5 className='text-lg  2xl:text-2xl text-black font-semibold '> <HeadTagIcon />  Become Pro</h5>
                        <h3 className='text-xl 2xl:text-3xl text-black font-bold'>with Ultimate access pass</h3>
                        <div className='text-xs '>
                            <a className='underline'><i>Compare plans</i></a>
                        </div>
                    </div>
                </Styles.AccessWrap>
                <Styles.SubscribeWrap>
                    <Image className='hidden xl:block absolute sm:-top-[10%] sm:-left-[35%] md:-left-[25%] md:top-0 ' src={OptionsTagArrow} alt="" />
                    <div className="flex">
                        <div className="flex flex-col pl-6 sm:pl-14 mr-5 justify-center">
                            <h6 className="text-xs text-white ">Get everything</h6>
                            <h4 className="sm:text-3xl text-xl font-bold text-white">Subscribe</h4>
                            <p className="sm:text-[10px] text-[8px] text-[#969696]">Plans starting from $9 per month</p>
                        </div>
                        <div className="w-[1px] h-full  bg-[#525252] rotate-[30deg] mx-4 sm:mx-7">

                        </div>
                        <div className="flex flex-col ml-3 sm:ml-5 justify-center">
                            <h6 className="text-xs text-white ">Pay as you go</h6>
                            <h4 className="sm:text-3xl text-xl font-bold text-white">Credit</h4>
                            <p className="sm:text-[10px] text-[8px] text-[#969696]">Lower than 0.02 Cents/download</p>
                        </div>
                    </div>
                </Styles.SubscribeWrap>
            </Styles.WrapperRight>
        </Styles.Wrapper>
    )
}