import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Link} from "react-scroll";
import {useTheme} from "../../ThemeProvider";

const items = [
    {
        title: 'Home',
        href: 'home',
        iconId: 'navBarHome',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Service',
        href: 'services',
        iconId: 'navBarService',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Education',
        href: 'education',
        iconId: 'navBarEducation',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
        iconId: 'navBarPortfolio',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Blog',
        href: 'blog',
        iconId: 'navBarBlog',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Contact',
        href: 'contacts',
        iconId: 'navBarContact',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    }
]
export const NavBar = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Nav theme={theme}>

            <ul>
                <li>
                    <ToggleButton onClick={() => {
                        toggleTheme(theme === 'dark' ? 'light' : 'dark');
                    }}
                    ><Icon  iconId={'navBarContrast'} width={'30px'} height={'30px'} fill={"#F0F0F6"}/></ToggleButton>
                </li>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <MenuLink
                                smooth={true}
                                to={item.href}
                                activeClass="active"
                                spy={true}
                            >
                                <LinkItem title={item.title}>
                                    <Icon iconId={item.iconId} width={item.iconIdWidth} height={item.iconIdWidth}
                                          fill={"#F0F0F6"}/>
                                </LinkItem>
                            </MenuLink>
                        </li>
                    );
                })}
            </ul>
        </Nav>
    );
};

const MenuLink = styled(Link)``;
const Nav = styled.nav`
  position: fixed;
  right: 0;
  z-index: 100;
  min-width: 108px;
  background-color: ${({theme}) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};
  padding: 50px 22px 10px 25px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
  }

  @media screen and (max-width: 1091px) {
    position: fixed;
    bottom: 0;
    background-color: ${({theme}) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};
    width: 100%;
    height: auto;
    padding: 20px 0;

    ul {
      display: flex;
      gap: 45px;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        margin-bottom: 0;
      }

      li:first-child {
        margin-bottom: 0;

        a div {
          &:hover::after {
            bottom: 54px;
          }
        }
      }

      a {
        &:first-child {
          margin-bottom: 0;
        }
      }
    }

    @media screen and (max-width: 570px) {
      ul {
        gap: 30px;
      }

      li:first-child {
        display: none;
      }
    }
    @media screen and (max-width: 425px) {
      padding: 10px 0;
      ul {
        gap: 10px;
      }
    }
  }
`;
const LinkItem = styled.div`
  position: relative;

  svg {
    color: ${({theme}) => theme === 'dark' ? '#FFB400' : '#000000'};
    transition: all .3s ease;
  }

  &:hover svg {
    fill: ${({theme}) => theme === 'dark' ? '#FFB400' : '#000000'};
    transform: scale(1.3);
    transition: all .3s ease;
  }

  &:hover::after {
    content: attr(title);
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({theme}) => theme === 'dark' ? '#FFFFFF' : '#2B2B2B'};
    color: ${({theme}) => theme === 'dark' ? '#000000' : '#FFFFFF'};
    padding: 5px 15px;
    border-radius: 3px;
    white-space: nowrap;
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: 120%;
    left: 25%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 13px solid ${({theme}) => theme === 'dark' ? '#FFFFFF' : '#2B2B2B'};
  }
`;
const ToggleButton = styled(LinkItem)`
  margin: 50px 0 125px 0;
  text-align: center;

  svg {
    color: ${({theme}) => theme === 'dark' ? '#FFB400' : '#000000'};
    transition: all .3s ease;
  }

  @media screen and (max-width: 1091px) {
  margin: 0;
  }
`

