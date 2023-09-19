import React from 'react'
import { useTheme } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { SectionProps } from '../../types'
import { Wrapper, Scaffolding, Text } from '../../components/common'
import { Market, Markets, Message, Mobile, Block } from '../../components/ad'

export default function Section5({ inView }: SectionProps) {
    const { color } = useTheme()

    const style: React.CSSProperties = {
        bottom: isMobile ? '10%' : '40%',
        left: '-30%',
        right: '-30%',
        background: color['orange03'],
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
    }

    const screenFragment = <div className="screen" style={style}></div>

    return (
        <>
            <Scaffolding background={color['white']} foreground={color['orange03']} />
            <Block direction="horizontal">
                <Wrapper>
                    <div className="content">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Mobile />
                        </div>
                        <div className="text">
                            <Text
                                title="언제 어디서나 에스원과 함께하세요"
                                subTitle="에스원 고객센터 모바일앱과 함께"
                                type="orange"
                                styles="flex-direction: column-reverse;"
                            />
                            <Markets>
                                <Market
                                    icon="resource/app-store-icon.svg"
                                    store="resource/app-store.svg"
                                    text="resource/app-store-text.svg"
                                />
                                <Market
                                    icon="resource/google-store-icon.svg"
                                    store="resource/google-store.svg"
                                    text="resource/google-store-text.svg"
                                />
                            </Markets>
                            <Message>
                                <div>
                                    당신의 안전과 평화를 우리와 함께하세요! <br />
                                    언제 어디서나 접근하고 모니터링할 수 있습니다. <br />
                                    지금 다운로드하여 안전한 환경을 만들어보세요. <br />
                                </div>
                            </Message>
                        </div>
                    </div>
                </Wrapper>
                {screenFragment}
            </Block>
        </>
    )
}
