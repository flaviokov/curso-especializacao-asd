import logo from '../logo.svg';

import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <HeaderContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <MainMenu />
    </HeaderContainer>
);