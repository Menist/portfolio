import styled, {css} from "styled-components";
import {Main} from "./section/main/Main";
import {SidebarAbout} from "./section/about/SidebarAbout";
import {LanguagesMain} from "./section/languages/LanguagesMain";
import {SkillsMain} from "./section/skills/SkillsMain";
import {ExtraSkillsMaine} from "./section/extraSkills/ExtraSkillsMaine";
import {Btn} from "./section/button/Btn";
import {  useTheme } from '../../ThemeProvider';
import {ThemeObjectType} from "../../styles/ColorSheme";

type Props = {
    menuIsOpen: boolean
    setMenuIsOpen: (menuIsOpen: boolean) => void
}
export const Sidebar = (props: Props) => {
    const { meow } = useTheme();
    const onMobileSideBarClick = () => {
        props.setMenuIsOpen(!props.menuIsOpen);
    };
    return (
        <>
            <BurgerBtn meow={meow} isOpen={props.menuIsOpen} onClick={onMobileSideBarClick}>
                <span></span>
            </BurgerBtn>

            <SidebarStyled meow={meow} isOpen={props.menuIsOpen}>
                <Container meow={meow}>
                    <Main />
                    <SidebarAbout />
                    <LanguagesMain />
                    <SkillsMain />
                    <ExtraSkillsMaine />
                    <Btn />
                </Container>
                <OverLay
                    onClick={() => {
                        props.setMenuIsOpen(true);
                    }}
                ></OverLay>
            </SidebarStyled>
        </>
    );
};

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  right: 0;
`
const SidebarStyled = styled.aside<{ isOpen: boolean, meow: ThemeObjectType }>`
  position: relative;
  left: ${props => !props.isOpen ? '-310px' : '0'};
  transition:${({meow}) =>meow.animation.transitionAll};
  z-index: 100;

  @media screen and (max-width: 800px) {
    left: ${props => !props.isOpen ? '0' : '-310px'};
    position: fixed;
    height: 100%;
    ${props => !props.isOpen && css<{ isOpen: boolean, meow: ThemeObjectType }>`
      background-color: rgba(37, 37, 37, 0.79);
      top: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      transition:${({meow}) =>meow.animation.transitionAll};
      z-index: 103;
    `}
  }
`
export const Container = styled.div<{meow: ThemeObjectType}>`
  position: fixed;
  min-width: 310px;
  height: 100vh;
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  padding: 50px 30px 25px 28px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    padding: 25px 30px 25px 28px;
  }
`
const BurgerBtn = styled.button<{ isOpen: boolean, meow: ThemeObjectType }>`
  position: fixed;
  z-index: 103;
  top: 5px;
  left: ${(props) => props.isOpen ? '27px' : '9px'};
  height: 50px;
  cursor: pointer;
  transform: ${(props) => props.isOpen ? 'translateX(290px)' : 'translateX(0px)'};
  width: 14px;
  background-color: ${({meow}) =>meow.colors.primary};
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
    background-color:  ${({meow}) =>meow.colors.headerText};
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color:  ${({meow}) =>meow.colors.headerText};
      top: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color:  ${({meow}) =>meow.colors.headerText};
      bottom: -20px;
    }
  }
  &:hover{
    border: 2px solid  ${({meow}) =>meow.colors.primary};
    background-color:  ${({meow}) =>meow.colors.backgroundColorSection};
    border-radius: 3px;
  }
`
