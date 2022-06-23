import React from 'react'

const Total = ({ parts }) => (
    <div>
        <strong>total of {(parts.map(part => part.exercises)).reduce((prev, current) => prev + current)} exercises </strong>
    </div>
)

export default Total
