import React from 'react'
import { useTheme } from 'styled-components'
import { SectionProps } from '../../types'
import { Section, Wrapper, Scaffolding, Text } from '../../components/common'
import { Cards } from '../../components/message'

export default function Section4({ inView }: SectionProps) {
    const { color } = useTheme()

    const screenFragment = <div className="screen" style={{ background: color['blue02'], bottom: '40%' }}></div>

    return (
        <>
            <Scaffolding background={color['white']} foreground={color['blue02']} />
            <Section>
                <Wrapper>
                    <div className="content" style={{ zIndex: 10 }}>
                        <div style={{ marginTop: '160px' }}>
                            <Text
                                title="많은 고객님들의 사랑을 받고 있습니다"
                                subTitle="실제 고객님들의 이용 후기를 담았습니다"
                                type="blue"
                                direction="vertical"
                            />
                        </div>
                        <div>
                            <Cards />
                        </div>
                    </div>
                </Wrapper>
                {screenFragment}
            </Section>
        </>
    )
}
