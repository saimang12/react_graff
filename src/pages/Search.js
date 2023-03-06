import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";


const Input = styled.input`
border: none;
outline: none;
border-bottom: 1px solid #333;
`

const Button = styled.button`
font-size: 23px;
background: transparent;
border: none;
outline: none;
`

const Search = () => {
    const [txt, setText] = useState('');
    const inputHandler = e => {
        const { value } = e.target;
        setText(value)
    }
    return (
        <>
            <Input type="text" onChange={inputHandler} />
            <Button>
                <BsSearch />
            </Button>
            <div>{txt}</div>
        </>
    )
}

export default Search;