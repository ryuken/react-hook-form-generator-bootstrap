import React from "react"

import { useStyles } from "../hooks/useStyles"

export const TitleField = ({ field, }) => {
    const {
        label,
        styles = {},
    } = field

    const fieldStyles = useStyles("titleField", styles)

    return (
        <h1 {...fieldStyles}>{label}</h1>
    )
}