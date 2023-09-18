import React from 'react'
import Styled, { keyframes } from 'styled-components'
import { values } from '../../lib'
import Button from './Button'

const Container = Styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100px;
    z-index: 1000;

    .wrapper {
        height: 100%;
        max-width: 1500px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
    }
`

const Logo = Styled.div`
    z-index: 10;
    height: 100%;

    img {
        height: 100%;
    }
`

const Center = Styled.ul`
    z-index: 10;
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.4rem;

    li {
        margin: auto;
        font-size: ${(props) => props.theme.fontSize['sm']};
        font-weight: lighter;

        a {
            color: ${(props) => props.theme.color['white']};
            text-decoration: none;
        }
    }

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        li {
            display: none;
        }
    }
`

const Right = Styled.div`
    z-index: 10;

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        display: none;
    }
`

const MobileRight = Styled.div`
    display: none;

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    button {
        border: none;
        background: #333;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;

        img {
            width: 100%;
        }
    }

    svg {
        position: absolute;
        left: 38px;
    }

    span {
        display: flex;
        align-items: center;
        background: ${(props) => props.theme.color['darkGray']};
        color: ${(props) => props.theme.color['white']};
        padding: 5px 5px 5px 10px;
        border-radius: 100px;
        cursor: pointer;

        img {
            width: 20px;
        }
    }
`

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [scrolled])

    const onScroll = React.useCallback(() => {
        if (ref.current) {
            const onTop = window.scrollY > 0

            if (onTop !== scrolled) {
                console.log(onTop)
                setScrolled(onTop)
            }
        }
    }, [ref.current, scrolled])

    return (
        <div>
            <Container ref={ref}>
                <Screen scrolled={scrolled} />
                <div className="wrapper">
                    <Logo>
                        <a href="#">
                            <img src="./logo.png" />
                        </a>
                    </Logo>
                    <Center>
                        {values.category.map((c) => (
                            <li key={c.name}>
                                <a href={`/${c.url}`}>{c.name}</a>
                            </li>
                        ))}
                    </Center>
                    <Right>
                        <Button>로그인</Button>
                    </Right>
                    <MobileRight>
                        <button>
                            <img src="resource/lock outline.png" />
                        </button>
                        <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0 0.5C1.06667 1.44444 4.16 2.76667 8 0.5V9V17.5C4.16 15.2333 1.06667 16.5556 0 17.5V9V0.5Z"
                                fill="#414141"
                            />
                        </svg>
                        <span>
                            <img src="resource/menu.png" />
                            <span>Menu</span>
                        </span>
                    </MobileRight>
                </div>
            </Container>
        </div>
    )
}

const animation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: .8;
    }
`

const Screen = Styled.div<{ scrolled: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    background: ${(props) => props.theme.color['orange03']};
    animation: ${(props) => (props.scrolled ? animation : null)} .3s ease-in 1s forwards;
`

export default Header
