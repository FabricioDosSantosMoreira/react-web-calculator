import styled from 'styled-components';

export const Container = styled.div`
    background-color: #6422EB;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;


export const FixedContent = styled.div`
    display: block;
    min-width: 45%;
    max-width: 45%;

    @media (max-width: 1000px) {
        min-width: 95%;
        max-width: 95%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: stretch; 

    width: auto; 
    height: auto;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CalculatorContent = styled.div`
    background-color: #EBDF21;

    box-shadow: 5px 5px rgb(0 0 0 / 40%);
    box-sizing: border-box;
    border-radius: 10px 0 0 10px;

    width: 60%; 
    max-height: 90vh;

    padding: 15px;
    
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 90%;
    }
`;

export const HistoryContent = styled.div`
    background-color: #4A493E;

    box-shadow: 5px 5px rgb(0 0 0 / 40%);
    border-radius: 0 10px 10px 0px;

    width: 40%; 
    height: auto; 

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    overflow-wrap: break-word;
    word-break: break-word;

    h1 {
        color: #FFFFFF;

        font-size: 30px;

        width: 100%;

        margin: 0; /* Remove margens padrão */
        padding: 10px 0;
        
        display: flex; 
        justify-content: center; 
        align-items: center; 
        text-align: center;
        gap: 10px; 
    }

    ul {
        color: #FFFFFF;
        font-size: 12px;
        max-width: 100%;
        margin: 0px;
        margin-left: 10px;

        list-style: none;
        padding: 0;
        text-align: left;
    }

    
    li {
        max-width: 95%;
        margin-bottom: 10px;

        word-break: break-all;
    }

    @media (max-width: 1000px) {
        width: 90%;
        border-radius: 10px 0 0 10px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
