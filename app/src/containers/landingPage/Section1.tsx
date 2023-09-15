import React from 'react'
import { useTheme } from 'styled-components'
import { SectionProps } from '../../types'
import { Section, Wrapper } from '../../components/common'
import Text from '../../components/common/Text'
import { Cycle } from '../../components/cycle'
import { CallButton } from '../../components'

export default function Section1({ inView }: SectionProps) {
    const { color } = useTheme()

    const textFragment = (
        <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'flex-start' }}>
            <Text
                title="소중한 그대의 일상을 지킨다는 의미"
                subTitle="신뢰와 혁신으로 더 나은 보안을 선사하는 파트너"
                type="orange"
            />
            <CallButton />
        </div>
    )

    const cycleFragment = (
        <div>
            <Cycle />
        </div>
    )

    const screenFragment = <div className="screen" style={{ background: color['orange03'] }}></div>

    return (
        <Section direction="horizontal">
            <Wrapper>
                <div className="content">
                    {textFragment}
                    {cycleFragment}
                </div>
            </Wrapper>
            {screenFragment}
        </Section>
    )
}
