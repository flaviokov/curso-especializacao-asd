import styled from 'styled-components';

export const HomeContainer = styled.section`
    margin: auto;
    padding: 10px;
    border: 1px solid #282c34;
    border-radius: 5px;
    color: #61dafb;
    width: 500px;

    a {
        list-style: none;
        color: white;
        text-decoration:none;
    }
   
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        border-radius: 5px;
    }
      
     td, th {
        
        padding: 8px;
      
      }
      
      tr{background-color:#282c34;}
      
    
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color:#61dafb;
        color: #282c34;
      }

    
`