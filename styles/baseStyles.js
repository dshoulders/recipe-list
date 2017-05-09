export const padding = '15px'

export const fontFamily = 'Open Sans'

export const border = '1px solid #ccc'

export const fontWeight = {
    BOLD: 700,
    SEMI_BOLD: 600,
    NORMAL: 400,
    LIGHT: 300
}

export const colour = {
    darkGrey: '#3c3c3c',
    lightBlue: '#e0e1ec',
    blue: '#0087ff'
}

export const tagStyles = {
    color: '#ff9b00',
    background: 'whitesmoke',
    padding: '0 5px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontWeight: fontWeight.NORMAL 
}

export const input = {
    marginBottom: padding,
    padding: '5px 10px',
    border: 'none',
    borderBottom: border,
    fontFamily: fontFamily,
    fontWeight: fontWeight.LIGHT,
    fontSize: '18px',
    outline: 'none',
    width: '100%'
}

export const button = {
    background: '#00bf83',
    fontSize: '14px',
    border: '0px',
    borderRadius: '2px',
    padding: '5px 10px',
    cursor: 'pointer',
    color: '#fff'
}

export const breakLongWords = {
    /* These are technically the same, but use both */
    'overflow-wrap': 'break-word',
    'word-wrap': 'break-word',

    '-ms-word-break': 'break-all',
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    'word-break': 'break-all',
    /* Instead use this non-standard one: */
    'word-break': 'break-word',

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    '-ms-hyphens': 'auto',
    '-moz-hyphens': 'auto',
    '-webkit-hyphens': 'auto',
    'hyphens': 'auto'
}