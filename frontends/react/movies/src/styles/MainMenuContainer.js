import styled from 'styled-components';

export const MainMenuContainer = styled.nav`
   
    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin-right: 10px;
        }
    }

    a:link, a:visited {
        background-color: #282c34;
        color: white;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
      
      a:hover, a:active {
        background-color: #282c34;
      }

`