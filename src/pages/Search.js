import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";


const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #000;  
`

const Button = styled.button`
    font-size:20px;
    background: none;
    border: none;
`


const Search = () => {
    const [txt, setTxt] = useState('')
    const inputHandler = e => {
        const { value } = e.target;
        if (value.length < 5) {

        }
        setTxt(value)
    }
    return (
        <>
            <Input type="text" onChange={inputHandler} />
            <Button><BsSearch /></Button>
            {/* <div>{txt}</div> */}
        </>

    )
}

export default Search;