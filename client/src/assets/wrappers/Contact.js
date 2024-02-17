import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    .row{
        display: flex;
        flex-direction: row;
        div{
            margin-left: 20px;
            background-color: white;
            width: 200px;
            height: 180px;
            text-align: center;
            box-shadow: 0px 15px 15px rgba(0,0,0,0.8);
            border-radius: 8px;
            transform: translateX(6%);
            h2{
                font-size: 2rem;
                color: #76AD22;
            }
            h4{
                margin: 0;
                padding: 0;
            }
        }
        z-index: 99;
    }
    .form{
        background-color: black;
        display: flex;
        flex-direction: column;
        min-width: 50vw;
        width: 100%;
        margin: 10px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        padding-top: 50px;
        transform: translateY(-18%);
        border-radius: 10px;
        box-shadow: 0px 20px 20px rgba(0,0,0,0.8);
        h1{
            color: white;
        }
        button{
            width: 60%;
            margin: 10px;
            padding: 10px;
            font-size: 1rem;
            background-color: #76AD22;
            color: white;
            border: 1px solid white;
            border-radius: 4px;
            transition: 0.5s ease-in;
            &:hover{
                background-color: white;
                color: #76AD22;
            }
        }
    }
`

export default Wrapper