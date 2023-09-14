import React from 'react'
import { InView } from 'react-intersection-observer'
import { Layout } from '../../components/common'

export default function LandingPage() {
    return (
        <>
            {[
                require('./Section1'),
                require('./Section2'),
                require('./Section3'),
                require('./Section4'),
                require('./Section5'),
            ].map(({ default: Component }, i) => {
                return (
                    <InView key={i}>
                        {({ inView, ref }) => (
                            <Layout ref={ref}>
                                <Component inView={inView} />
                            </Layout>
                        )}
                    </InView>
                )
            })}
        </>
    )
}
