import React from 'react'
import { useTheme } from 'styled-components'
import { SectionProps } from '../../types'
import { Section, Wrapper, Scaffolding, Text } from '../../components/common'
import { TimerProvider } from '../../context/TimerContext'
import { Cardbox, ProgressBar } from '../../components/cardbox'
import { values } from '../../lib'

export default function Section2({ inView }: SectionProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const { color } = useTheme()

    const forward = (index: number) => {
        setCurrentIndex(index)
    }

    const textFragment = (
        <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'flex-start' }}>
            <Text
                title="고객님들을 위한 세콤의 통합 서비스"
                subTitle="세콤이 제공하는 서비스로 어떤 것들이 있는지 알아보세요"
                type="blue"
            />
            <ProgressBar categories={values.categories} currentIndex={currentIndex} forward={forward} />
        </div>
    )

    const cardboxFragment = (
        <div>
            <Cardbox currentIndex={currentIndex} />
        </div>
    )

    const screenFragment = <div className="screen" style={{ background: color['blue02'] }}></div>

    return (
        <>
            <Scaffolding background={color['orange03']} foreground={color['blue02']} />
            {inView && (
                <TimerProvider>
                    <Section direction="horizontal">
                        <Wrapper>
                            <div className="content">
                                {cardboxFragment}
                                {textFragment}
                            </div>
                        </Wrapper>
                        {screenFragment}
                    </Section>
                </TimerProvider>
            )}
        </>
    )
}
