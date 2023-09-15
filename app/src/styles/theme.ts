const windowSize = {
    mobile: 600,
    tablet: 768,
    desktops: 1042,
}

const fontSize = {
    xs: '0.5rem',
    sm: '0.8rem',
    base: '1rem',
    md: '1.4rem',
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
        title: color.blue01,
        sub: color.blue00,
    },
}

export default {
    windowSize,
    fontSize,
    color,
    theme,
}
