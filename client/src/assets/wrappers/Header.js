import styled from "styled-components";


const Wrapper = styled.div`
    width: 100%;
    .branding{
        background-image:url('https://img.freepik.com/free-photo/monstera-green-leaves-nature-wallpaper_53876-129664.jpg?w=1060&t=st=1708075823~exp=1708076423~hmac=925c8154fa7483025629fa46996b2f57229dde37d0db710ce3ea2376bd7c893e');
        background-size: cover;
        min-height: 10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        h2{
            margin:0;
            color: white;
        }
        a{
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            padding:10px;
            border: 1px solid white;
            border-radius: 4px;
            transition: 0.5s ease-in;
        }
        a:hover{
            background-color: white;
            color: green;
        }
    }

    nav{
        display: flex;
        background-color: black;
        width: 100%;
        li{
            list-style-type: none;
            margin: 10px;
            padding: 10px;
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
`

export default Wrapper