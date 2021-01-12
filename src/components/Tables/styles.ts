import styled from 'styled-components';

export const Table = styled.div`
    :hover {
        background-color: #3390ff;
    }
    #meio {
        background-color: #fff;

        height: 100px;
        overflow: auto;
        margin-bottom: 4px;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 7px;
        display: table;
    }
    th {
        background-color: #c0c0c0;
        color: #000;
        border-bottom: 1px dotted #000;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 2px;
        height: 12px;
        vertical-align: bottom;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    td {
        color: #000;
    }
    .box {
        weight: 500px;
        height: 500px;
        margin: 30px;

        border: 1px solid #fff;
        background-color: #128ac6;
    }
    .box2 {
        height: 500px;
        background-color: #fff;
    }
`;
