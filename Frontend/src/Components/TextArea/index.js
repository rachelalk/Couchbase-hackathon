import React from 'react'

const TextArea = ({descriptionOnChange, descriptionValue}) => {
    return (
        <textarea onChange={descriptionOnChange} placeholder="Description" value={descriptionValue}></textarea>
    )
}

export default TextArea