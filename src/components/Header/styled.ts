import styled from 'styled-components'

export const Select = styled.select`
    height: 35px;
    padding: 10px;
    border-radius: 6px;

`
export const HeaderStyled = styled.header`
    height: 250px;
    background: #041f4a;
    width: 100%;
    position: sticky;
    top: 0;

    

    .header-layout {
        padding-bottom: 50px;
        max-width: 960px;
        height: 100%;
        margin: 0 auto;
       

        .header-title {
            margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 20px;

            .search-bar {
            padding: 0 20px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .input-wrapper {
                width: 100%;

                .search-input {
                &:focus {
                    outline-width: 0;
                }
                padding-left: 10px;
                width: 100%;
                height: 35px;
                border-radius: 5px;
            }
            }

            
        }

        .logo {
            cursor: pointer;
            font-family: 'Libre Baskerville', serif;
            text-align:right;
            font-size: 50px;
            padding: 0 20px;
            > a {
                text-decoration:none;
                color: #ffffff;
            }
        }
        }
    }


    @media only screen and (max-width: 720px) {
           .header-layout > .header-title {
                flex-direction: column-reverse;
                align-items: baseline;
                justify-content: flex-start;
                margin-bottom: 0;
            }
        }

    

`