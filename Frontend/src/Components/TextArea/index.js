import React from 'react'

const TextArea = ({descriptionOnChange, descriptionValue}) => {
    return (
        <textarea onChange={descriptionOnChange} placeholder="Description"></textarea>
    )
}

export default TextArea