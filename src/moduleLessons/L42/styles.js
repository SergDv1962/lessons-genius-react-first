import styled from 'styled-components'

// npm install styled-components@latest ----- інсталяція додатку styled-components
//  треба більше дивитися в документацію додатка на сайті. Посилання є в папці реакта-посилань

export const Title = styled.h1`
  color: green
`;

export const Button = styled.button`
   border-radius: 20px;
   padding: 10px;
   background-color: ${props => props.state ?  'yellow' : "#BF4F74"};
   color: ${props => props.primary || 'green'};
`;

