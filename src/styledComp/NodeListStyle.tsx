import styled from 'styled-components'

export const NodeListStyle=styled.div`
    display: grid;
    grid-template-columns: auto auto ;
    padding-bottom: 30px;
    @media (max-width:768px){
    display: grid;
    grid-template-columns: auto ;
    }
`