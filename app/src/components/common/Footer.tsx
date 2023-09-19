import React from 'react'
import Styled from 'styled-components'

const Block = Styled.div`
    max-width: 1500px;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 100px;

    @media (max-width: 1250px) {
        margin-top: 100px;
        margin-bottom: 50px;

        padding-left: 10px;
        padding-right: 10px;
    }
`

const Top = Styled.section`
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.color['lightGray']};
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: 50px;

    @media (max-width: 1250px) {
        padding-bottom: 30px;
    }

    .left {
        display: flex;
        align-items: center;
        gap: 10px;

        div {
            display: flex;
            align-items: center;
            gap: 20px;

            a {
                img {
                    width: 36px;
                }

                &:hover {
                    filter: brightness(.7);
                }
            }
        }

        @media (max-width: 1250px) {
            span {
                display: none;
            }

            ul {
                li {
                    font-size: ${(props) => props.theme.fontSize['xs']};
                }
            }

            div {
                a {
                    img {
                        width: 30px;
                    }
                }
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            font-weight: bold;
        }

        img {
            margin-left: 10px;
        }

        @media (max-width: 1250px) {
            span {
                font-size: ${(props) => props.theme.fontSize['base']};
            }
        }
    }
`

const Bottom = Styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.color['lightGray']};
    padding-top: 50px;

    @media (max-width: 1250px) {
        padding-top: 30px;
    }

    .left {
        display: flex;

        a {
            display: inline-block;
            text-decoration: none;
            color: ${(props) => props.theme.color['lightGray']};
        }
    
        ul {
            list-style: none;
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 0;
        }
    }

    @media (max-width: 1250px) {
        flex-direction: column;
        align-items: center;

        .left {
            flex-direction: column;
            gap: 20px;
            width: 100%;

            a {
                img {
                    height: 60px;
                }
            }

            ul {
                justify-content: space-between;

                li {
                    a {
                        font-size: ${(props) => props.theme.fontSize['sm']};
                    }
                }
            }
        }

        .right {
            margin-top: 30px;
            font-size: ${(props) => props.theme.fontSize['base']};
        }
    }
`

const Footer = () => {
    return (
        <Block>
            <Top>
                <div className="left">
                    <span>에스원의 소식을 들어보세요</span>
                    <div>
                        <a href="">
                            <img src="resource/icon-facebook.svg" />
                        </a>
                        <a href="">
                            <img src="resource/icon-instagram.svg" />
                        </a>
                        <a href="">
                            <img src="resource/icon-youtube.svg" />
                        </a>
                        <a href="">
                            <img src="resource/icon-blog.svg" />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <span>FAMILY SITE</span>
                    <img src="resource/arrow-top.svg" />
                </div>
            </Top>
            <Bottom>
                <div className="left">
                    <a href="/">
                        <img src="resource/logo.svg" />
                    </a>
                    <ul>
                        <li>
                            <a href="">회사소개</a>
                        </li>
                        <li>
                            <a href="">IR</a>
                        </li>
                        <li>
                            <a href="">윤리경영</a>
                        </li>
                        <li>
                            <a href="">자료실</a>
                        </li>
                        <li>
                            <a href="">인재채용</a>
                        </li>
                        <li>
                            <a href="">원격지원서비스</a>
                        </li>
                    </ul>
                </div>
                <div className="right">S-1 CORPORATION©2023</div>
            </Bottom>
        </Block>
    )
}

export default Footer
