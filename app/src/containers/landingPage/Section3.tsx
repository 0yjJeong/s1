import React from 'react'
import { useTheme } from 'styled-components'
import { SectionProps } from '../../types'
import { Section, Wrapper, Scaffolding, Text } from '../../components/common'
import { Graph } from '../../components/graph'

export default function Section3({ inView }: SectionProps) {
    const { color } = useTheme()

    return (
        <>
            <Scaffolding background={color['blue02']} foreground={color['white']} />
            {inView && (
                <Section direction="horizontal">
                    <Wrapper>
                        <div className="content">
                            <div className="text">
                                <Text
                                    title="에스원은 오늘도 108만 고객처와 함께합니다"
                                    subTitle="※점유율(한국갤럽 2022년 12월, 월서비스료 기준, 시스템경비 가입고객 총 13,800개 샘플조사,신뢰수준 95% 표본오차±0.83%p)"
                                    type="orange-reverse"
                                />
                            </div>
                            <div style={{ height: '100%' }}>
                                <Graph />
                            </div>
                        </div>
                    </Wrapper>
                </Section>
            )}
        </>
    )
}
