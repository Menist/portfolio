import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {AboutMe} from "./layout/section/main/Main";
import {Services} from "./layout/section/services/Services";
import {Price} from "./layout/section/price/Price";
import {Education} from "./layout/section/education/Education";
import React, {useState} from "react";
import {Blog} from "./layout/section/blog/Blog";
import {GeneralFormFile} from "./layout/section/form/GeneralFormFile";
import {Map} from "./layout/section/map/Map";
import {Sidebar} from "./layout/sideBar/Sidebar";
import {NavBar} from "./layout/navBar/navBar";
import {Footer} from "./layout/footer/Footer";
import {Slider} from "./layout/section/recommendations/Slider";
import {TabPortfolio} from "./layout/section/portfolioTab/TabPortfolio";

function App() {
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    return (
        <div className="App">
            <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
            <Main isOpen={menuIsOpen}>
                <Container>
                    <Header/>
                    <AboutMe/>
                    <Services/>
                    <Price/>
                    <Slider/>
                    <Education/>
                    {/*<Portfolio/>*/}
                    <TabPortfolio/>
                    <Blog/>
                    <GeneralFormFile/>
                    <Map/>
                    <Footer/>
                </Container>
            </Main>
            <NavBar/>
        </div>
    );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`
const Main = styled.main<{ isOpen: boolean }>`
  padding-left: ${props => props.isOpen ? '310px' : 'inherit'};
  padding-right: 108px;
  transition: all .9s ease;
  flex: 1;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }

  @media screen and (max-width: 1091px) {
    padding-right: 0;
  }
`

export default App;
