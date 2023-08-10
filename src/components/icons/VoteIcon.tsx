import { SVGProps } from 'react'

const VoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.413}
      d="M2.435 14.157v.343h12.13v-.343H13.25V6.772h-1.287v-1.03c0-.338-.126-.663-.353-.912L8.572 1.5l-.254.232 3.036 3.335c.172.187.266.433.265.687v1.03H6.754a.182.182 0 0 0-.034 0l-.364-.721-.308.154 1.937 3.818a1.013 1.013 0 0 1-1.272 1.4l-.057-.023a1.017 1.017 0 0 1-.515-.434L4.86 8.79a1.356 1.356 0 0 0-.139-.201L3.19 6.809a1.596 1.596 0 0 1-.385-1.031l-.03-4.096H2.43l.03 4.096c.004.458.17.9.468 1.247l.858 1v6.131H2.435Zm1.696-5.73.327.38c.04.047.075.097.106.15l1.281 2.196c.157.266.4.47.687.58l.057.023c.158.061.325.093.494.094a1.358 1.358 0 0 0 1.203-1.968L6.889 7.116h6.01v7.04H4.132V8.428Z"
    />
  </svg>
)
export default VoteIcon