import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    .form{
        align-items: start;
        width: 40%;
        label{
            padding: 10px;
            margin-left: 10px;
            color: greenyellow;
        }
        input,select,button,textarea{
            width: 90%;
            margin: 15px;
        }
        select{
            background-color: black;
            font-size: 1rem;
        }
    }
`

export default Wrapper