import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        div{
            width: 50%;
            margin: 10px;
            h1{
                text-align: center;
            }
            p{
                text-align: justify;
            }
            img{
                width: 90%;
                border-radius: 50% 20% 50% 20% / 20% 50% 20% 50%;
            }
        }
    }
`

export default Wrapper