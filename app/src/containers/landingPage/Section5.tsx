import React from 'react'
import { useTheme } from 'styled-components'
import { SectionProps } from '../../types'
import { Section, Wrapper, Scaffolding, Text } from '../../components/common'
import { Market, Message, Mobile, Block } from '../../components/ad'

export default function Section5({ inView }: SectionProps) {
    const { color } = useTheme()

    const style: React.CSSProperties = {
        bottom: '30%',
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
                                title="에스원은 오늘도 108만 고객처와 함께합니다"
                                subTitle="※점유율(한국갤럽 2022년 12월, 월서비스료 기준, 시스템경비 가입고객 총 13,800개 샘플조사,신뢰수준 95% 표본오차±0.83%p)"
                                type="orange"
                            />
                            <div style={{ display: 'flex', gap: '2rem' }}>
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
                            </div>
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
