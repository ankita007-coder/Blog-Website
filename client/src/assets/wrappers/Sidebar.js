import styled from "styled-components";


const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    width: 100%;
    min-height: 87vh;
    height: 100%;
    h4{
        padding: 20px 10px;
        text-align: center;
        margin: 0;
    }
    .line{
        border:1px solid greenyellow;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        li{
            padding: 15px;
            a{
                padding:20px;
                margin:20px 10px;
                color: white;
                text-decoration: none;
            }
            transition: 0.5s ease-in-out;
        }
        li:hover{
            background-color: white;
            a{
                color: black;
            }
            
        }
    }
    
`

export default Wrapper