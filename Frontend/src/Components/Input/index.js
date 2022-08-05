import React from 'react'

const Input = ({onChange, value, placeholder}) => {
    return (
       <input onChange={onChange} placeholder={placeholder} value={value}></input>
    )
}

export default Input