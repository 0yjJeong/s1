export default function Card() {
    return (
        <svg width="100%" viewBox="0 0 428 429" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_465_1973)">
                <rect x="13" y="13.6572" width="402" height="402" rx="60" fill="#F1F1F1" />
                <rect x="13.5" y="14.1572" width="401" height="401" rx="59.5" stroke="#BEBEBE" />
            </g>
            <mask id="mask0_465_1973" maskUnits="userSpaceOnUse" x="12" y="14" width="403" height="402">
                <rect
                    x="13.4912"
                    y="14.8053"
                    width="400.361"
                    height="400.361"
                    rx="79.5"
                    fill="#F1F1F1"
                    stroke="#BEBEBE"
                />
            </mask>
            <g mask="url(#mask0_465_1973)">
                <path
                    d="M418.905 85.8334C396.808 120.62 337.111 131.386 281.628 96.156C226.144 60.9257 210.51 2.32598 232.606 -32.4603C254.703 -67.2465 314.4 -78.0131 369.883 -42.7829C425.367 -7.5526 441.001 51.0471 418.905 85.8334Z"
                    stroke="white"
                    stroke-width="40"
                />
                <path
                    d="M495.396 190.723C450.466 261.455 338.053 275.092 242.345 214.32C146.636 153.548 111.187 46.0231 156.116 -24.7089C201.046 -95.4409 313.459 -109.078 409.168 -48.3064C504.876 12.4657 540.325 119.991 495.396 190.723Z"
                    stroke="white"
                    stroke-width="20"
                />
                <path
                    d="M430.432 123.947C414.32 146.193 387.323 157.707 356.263 157.958C325.205 158.208 290.342 147.162 259.158 124.585C227.974 102.008 206.598 72.3395 197.145 42.7593C187.691 13.1775 190.209 -16.0594 206.321 -38.3061C222.433 -60.5529 249.43 -72.0668 280.49 -72.3173C311.549 -72.5677 346.411 -61.5212 377.595 -38.9445C408.779 -16.3678 430.155 13.3011 439.608 42.8812C449.062 72.463 446.545 101.7 430.432 123.947Z"
                    stroke="white"
                    stroke-width="7"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_465_1973"
                    x="0"
                    y="0.657227"
                    width="428"
                    height="428"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_465_1973" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_465_1973" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_465_1973" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
