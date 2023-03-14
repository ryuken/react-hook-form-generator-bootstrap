import React, { useMemo } from 'react'

import { useStyles } from '../hooks/useStyles'

export const TitleField = ({
  id,
  name,
  field,
}) => {
  const {
    label,
    shouldDisplay,
    styles = {},
  } = field

  const fieldStyles = useStyles('titleField', styles)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay() : true
  }, [shouldDisplay])

  return isVisible ? (
    <h1 {...fieldStyles}>{label}</h1>
  ) : null
}