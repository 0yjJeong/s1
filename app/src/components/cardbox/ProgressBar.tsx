import { useMemo } from 'react'
import Styled, { keyframes } from 'styled-components'
import { useTimer } from '../../context/TimerContext'

type ProgressBarProps = {
    categories: string[]
    currentIndex: number
    forward(index: number): void
}

const ProgressBar = ({ categories, currentIndex, forward }: ProgressBarProps) => {
    const { ms } = useTimer()
    const msTos = useMemo(() => ms / 1000, [ms])

    return (
        <Container>
            {categories.map((category, i) => {
                const isPassing = msTos <= (i + 1) * 8 && msTos > i * 8
                const isPassed = msTos >= i * 8

                if (isPassing && currentIndex !== i) {
                    forward(i)
                }

                return (
                    <Progress active={isPassed} index={i} key={category}>
                        <div className="top">
                            {i + 1 !== categories.length && (
                                <>
                                    <div className="line" style={{ width: '100%' }}></div>
                                    <div className="line active"></div>
                                </>
                            )}
                            <span className="dot"></span>
                        </div>
                        <div className="bottom">{category}</div>
                    </Progress>
                )
            })}
        </Container>
    )
}

const Container = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
`

const fill = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`

const Progress = Styled.li<{ active: boolean; index: number }>`
    flex: 1 1 auto;
    width: 0;

    .top {
        position: relative;
        
        .dot {
            width: 15px;
            height: 15px;
            display: inline-block;
            background: ${(props) => (props.active ? '#fff' : '#333')};
            border-radius: 50%;
            position: relative;
        }

        .line {
            height: 1px;
            position: absolute;
            top: 50%;
            transform: translateY(-1px);
            background: #333;
        }

        .active {
            background: #fff;
            animation: ${fill} 8s ease forwards;
            animation-delay: ${(props) => props.index * 8 + 1}s;
           animation-fill-mode: forwards !important;
        }
    }

    .bottom {
        color: ${(props) => (props.active ? '#fff' : '#333')};
    }
`

export default ProgressBar
