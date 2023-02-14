import '@emotion/react'

interface Options {
    primary: string
    secondary?: string
    tertiary?: string
}

interface Background {
    img?: string
    colors:  Options
}

interface Font {
    family: Options
    colors: Options
}

declare module '@emotion/react' {
    export interface Theme {
        background: {
            colors: Options
        },
        font: {
            colors: Options
        }
    }
}