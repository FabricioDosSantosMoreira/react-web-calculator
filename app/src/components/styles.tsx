import styled from 'styled-components';

export const Container = styled.div`
    background-color: #6422EB;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: stretch; 

    width: 60%; 
    height: auto;
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
        font-size: 18px;
        max-width: 95%;
        margin: 0px;
        margin-left: 10px;

        list-style: none;
        padding: 0;
        text-align: left;
    }

    li {
        word-break: break-all;
        max-width: 100%;
        margin-bottom: 10px;
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
