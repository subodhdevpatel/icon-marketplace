import { FC, SVGProps } from "react"

export const HeartIcon: FC<SVGProps<SVGSVGElement>> = ({
    fill = '#e2e2e2',
    ...rest
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20.11" height="17.597" viewBox="0 0 20.11 17.597" {...rest}>
            <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M18.158,3.451a5.371,5.371,0,0,0-7.329.534l-.774.8-.774-.8a5.371,5.371,0,0,0-7.329-.534,5.64,5.64,0,0,0-.389,8.166l7.6,7.848a1.231,1.231,0,0,0,1.779,0l7.6-7.848a5.636,5.636,0,0,0-.385-8.166Z" transform="translate(0.001 -2.248)" fill={fill} opacity="0.996" />
        </svg>

    )
}