import { CSSProperties } from 'react'

export const createPeopleContainer = (divider: number): CSSProperties => {
    const style: CSSProperties = {
        width: `calc(100vw / ${divider})`,
        height: `calc(100vw / ${divider})`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    return style
}
