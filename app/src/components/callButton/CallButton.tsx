import Styled from 'styled-components'

const Block = Styled.div`
    background: #222;
    display: inline-block;
    border-radius: 100px;

    & > div {
        display: flex;
        align-items: center;
        padding: 0.8rem;
        gap: 0.5rem;

        .call {
            color: #fff;
        }
    
        .number {
            background: ${(props) => props.theme.color['orange03']};
            padding: 5px 10px;
            border-radius: 100px;
        }
    }
`

type CallButtonProps = {}

const CallButton = ({}: CallButtonProps) => {
    return (
        <Block>
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_316_1190)">
                        <path
                            d="M30.015 23.07C28.17 23.07 26.385 22.77 24.72 22.23C24.195 22.05 23.61 22.185 23.205 22.59L20.85 25.545C16.605 23.52 12.63 19.695 10.515 15.3L13.44 12.81C13.845 12.39 13.965 11.805 13.8 11.28C13.245 9.615 12.96 7.83 12.96 5.985C12.96 5.175 12.285 4.5 11.475 4.5H6.285C5.475 4.5 4.5 4.86 4.5 5.985C4.5 19.92 16.095 31.5 30.015 31.5C31.08 31.5 31.5 30.555 31.5 29.73V24.555C31.5 23.745 30.825 23.07 30.015 23.07Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_316_1190">
                            <rect width="36" height="36" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="call">문의하기</div>
                <div className="number">1588-3775</div>
            </div>
        </Block>
    )
}

export default CallButton
