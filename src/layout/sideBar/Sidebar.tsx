import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Main} from "./section/main/Main";
import {SidebarAbout} from "./section/about/SidebarAbout";
import {LanguagesMain} from "./section/languages/LanguagesMain";
import {SkillsMain} from "./section/skills/SkillsMain";
import {ExtraSkillsMaine} from "./section/extraSkills/ExtraSkillsMaine";
import {Btn} from "./section/button/Btn";

type Props = {
    menuIsOpen: boolean
    setMenuIsOpen: (menuIsOpen: boolean) => void
}
export const Sidebar = (props: Props) => {
    const onMobileSideBarClick = () => {
        props.setMenuIsOpen(!props.menuIsOpen)
    }
    return (
        <>
            {/*{props.menuIsOpen && <div></div>}*/}
            <BurgerBtn isOpen={props.menuIsOpen} onClick={onMobileSideBarClick}>
                <span></span>
            </BurgerBtn>
            <SidebarStyled isOpen={props.menuIsOpen}>
                <Container>
                    <Main/>
                    <SidebarAbout></SidebarAbout>
                    <LanguagesMain></LanguagesMain>
                    <SkillsMain></SkillsMain>
                    <ExtraSkillsMaine></ExtraSkillsMaine>
                    <Btn></Btn>
                </Container>
            </SidebarStyled>
        </>
    );
};
const SidebarStyled = styled.aside<{ isOpen: boolean }>`
  position: relative;
  left: ${props => !props.isOpen ? '-310px' : '0'};
  transition: ${theme.animation.transitionAll};
  z-index: 100;

  @media screen and (max-width: 800px) {
    left: ${props => !props.isOpen ? '0' : '-310px'};
    position: fixed;
    height: 100%;
    ${props => !props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(37, 37, 37, 0.79);
      top: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      transition: ${theme.animation.transitionAll};
      z-index: 103;
    `}
  }
`
export const Container = styled.div`
  position: fixed;
  min-width: 310px;
  height: 100vh;
  background-color: ${theme.colors.background};
  padding: 50px 30px 25px 28px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    padding: 25px 30px 25px 28px;
  }
`
const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  z-index: 103;
  top: 5px;
  left: ${(props) => props.isOpen ? '27px' : '9px'};
  height: 50px;
  cursor: pointer;
  transform: ${(props) => props.isOpen ? 'translateX(290px)' : 'translateX(0px)'};
  width: 14px;
  background-color: rgba(255, 180, 0, 0.59);
  transition: all .9s ease;
  border: 2px solid transparent;
  border-radius: 3px;

  @media screen and (max-width: 800px) {
    left: ${(props) => !props.isOpen ? '27px' : '9px'};
    transform: ${(props) => !props.isOpen ? 'translateX(290px)' : 'translateX(0px)'};
    z-index: 104;
  }

  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    position: absolute;
    left: 2px;
    bottom: 31px;
    background-color: ${theme.colors.headerText};
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color: ${theme.colors.headerText};
      top: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color: ${theme.colors.headerText};
      bottom: -20px;
    }
  }
  &:hover{
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.background};
    border-radius: 3px;
  }
`
