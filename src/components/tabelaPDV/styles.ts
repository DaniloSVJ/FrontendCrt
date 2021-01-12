import styled from 'styled-components';

export const Table = styled.div`
    #customers {
        font-family: 'Arial';
        border-collapse: collapse;
        width: 100%;
    }

    #customers td {
        background-color: #ffffcb;
        text-align: center;
    }

    #customers tr:nth-child(even) {
        background-color: #ffffcb;
    }

    #customers tr:hover {
        background-color: #ffffcb;
    }

    #customers th {
        padding: 4px;
        text-align: left;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 300 !important;
        border-bottom: 1px dotted #000;
        background-color: #ffffcb;
        color: #000;
    }
    th {
        vertical-align: bottom;
    }
`;
