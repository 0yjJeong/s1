const windowSize = {
    mobile: 600,
    tablet: 768,
    laptop: 1042,
}

const fontSize = {
    xs: '0.8rem',
    sm: '1rem',
    base: '1.3em',
    md: '2.5rem',
    lg: '4rem',
}

const color = {
    white: '#FFFFFF',

    lightGray: '#808080',
    darkGray: '#333333',

    orange00: '#FDE4C6',
    orange01: '#FFCC9F',
    orange02: '#FFB669',
    orange03: '#FF7D39',
    orange04: '#FF6501',

    blue00: '#ACB5BD',
    blue01: '#545F7B',
    blue02: '#172A5A',
    blue03: '#061B53',
}

const theme = {
    orange: {
        title: color.white,
        sub: color.orange00,
    },
    'orange-reverse': {
        title: color.orange03,
        sub: color.lightGray,
    },
    blue: {
        title: color.blue00,
        sub: color.blue01,
    },
}

export default {
    windowSize,
    fontSize,
    color,
    theme,
}
