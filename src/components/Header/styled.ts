import styled from 'styled-components'

export const Select = styled.select`
    height: 40px;
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
        max-width: 960px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .search-bar {
            padding: 0 20px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;

            .search-icon {
                filter:invert();
                width: 30px;
                height: 30px;
                margin-left: 30px;
                cursor:pointer;

            }

            .search-input {
                &:focus {
                    outline-width: 0;
                }
                padding-left: 10px;
                width: 100%;
                height: 30px;
                border-radius: 5px;
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

    

`