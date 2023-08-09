import React, { Fragment } from "react"

import { Row, Col } from "react-bootstrap"

export const GridField = ({ field, schema, renderField }) => {

    const { gridType } = field

    if (gridType === "row") {
        return (
            <Row className={field.className}>
                {schema.map((col, i) => (
                    <Fragment key={i}>
                        {Object.entries(col).map(item => renderField(item))}
                    </Fragment>
                ))}
            </Row>
        )
    }

    return (
        <Row>
            {schema.map((col, i) => {

                if (col?.shouldDisplay && false === col.shouldDisplay()) {
                    return null
                }

                return (
                    <Col key={i} xs={field?.xs || 12} sm={field?.sm || 6}>
                        {Object.entries(col).map(item => renderField(item))}
                    </Col>
                )
            })}
        </Row>
    )
}