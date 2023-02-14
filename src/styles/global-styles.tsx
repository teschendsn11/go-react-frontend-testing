import { useTheme } from "@emotion/react";
import { Global, css } from "@emotion/react";

function GlobalStyles() {
    const theme = useTheme();
    const globalStyles = css({
        'body': {
            backgroundColor: theme.background.colors.primary,
            color: theme.font.colors.primary
        }
    })

    return (
      <Global styles={globalStyles} />
  )
}

export default GlobalStyles;