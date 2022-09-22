import styled from 'styled-components'

export const StyledHeader= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    color: white;
    width: 100%;
    background: linear-gradient(to bottom,rgba(0, 0, 0,0.6),rgba(255,255,255,0.4));
    @media (max-width:768px) {
        width: 100%;
    }
`
