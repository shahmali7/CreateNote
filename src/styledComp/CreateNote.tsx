import styled from 'styled-components'

export const Form=styled.form`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    @media (max-width: 670px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const CreateNoteStyle=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    border-radius: 30px;
    border: 1px solid white;
    color: white;
    height: 200px;
    margin-top: 15px;
    margin-left: 5%;
    background-color: rgba(0,0,0,0.5);
    @media (max-width: 670px){
        width: 80%;
        height: auto;
        padding: 20px;
    }
    @media(max-width:340px){
        width: 75%;
    }
`
export const DIV=styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (max-width: 670px){
        margin-top:5px
    }
`

export const Input=styled.input`
    height: 25px;
    border: none;
    border-radius: 10px;
    outline: none;
`
export const ButtonAdd=styled.button`
    width: 90px;
    height: 35px;
    margin-top: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-out;
    &:hover{
        transform: scale(0.8);
    }
`