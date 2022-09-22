import styled from 'styled-components'

export const NoteStyle =styled.div`
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 30px;
    
`
export const SingleNote=styled.div`
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.theme.backGroundColor};
`

export const Button =styled.button`
    width: 120px;
    height: 30px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 1.1rem;
    font-size: 700;
`