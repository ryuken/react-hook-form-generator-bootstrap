import { useMemo, createContext, useContext } from "react"

export const StyleCtx = createContext({})

export const useStyles = (
    type,
    inlineStyles
) => {
    const baseStyles = useContext(StyleCtx)

    return useMemo(() => {
        return inlineStyles
            ? { ...baseStyles[type], ...inlineStyles }
            : (baseStyles[type])
    }, [ type, baseStyles, inlineStyles ])
}
