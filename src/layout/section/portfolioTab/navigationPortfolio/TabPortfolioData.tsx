import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Fade} from "react-awesome-reveal";

const items = [
    {
        title: 'All',
        href: '',
        status:'all'
    },
    {
        title: 'Services',
        href: 'services',
        status:'spa'
    },
    {
        title: 'Education',
        href: 'education',
        status:'react'
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
        status:'landing page'
    },
    {
        title: 'Blog',
        href: 'blog',
        status:'react'
    },
    {
        title: 'Contacts',
        href: 'contacts',
        status:'landing page'
    }
]
export const MenuTab = ({changeFilter}: {changeFilter: (filter: string)=> void}) => {
    return (
        <StyledMenu>
            <nav>
                <ul>
                <Fade cascade={true} damping={.2}>
                    {items.map((item, index) => {
                        return <li key={index}>
                            <button onClick={()=>changeFilter(item.status)}>{item.title}</button>
                        </li>
                    })}
                </Fade>
                </ul>
            </nav>
        </StyledMenu>
    );
};
const StyledMenu = styled.div`

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    font-weight: 500;
    white-space: nowrap;

    ul {
      display: flex;
      gap: 20px;
    }

    button {
      color: ${theme.colors.headerText};
      cursor: pointer;
      font-size: 18px;


      &:hover {
        color: ${theme.colors.primary};
        transition: ${theme.animation.transitionWidth};
      }
    }

    @media screen and (max-width: 767px) {
      ul {
        width: 100%;
        position: inherit;
        justify-content: center;
        margin-right: 0;
        transform: none;
        transition: none;
        font-size: 18px;

        &:hover {
          border-bottom-color: ${theme.colors.primary};
        }

        li {
          padding-top: 10px;
        }
      }
    }
    @media screen and (max-width: 499px) {
      cursor: grab;
      overflow-x: scroll;
      padding-bottom: 10px;
      color: ${theme.colors.primary};
      max-width: calc(98vw - 60px);
      
      &::-webkit-scrollbar {
        height: 5px;
        border: 1px solid ${theme.colors.accent};
        border-radius: 30px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background-color: ${theme.colors.primary};
      }
      ul {
        justify-content: flex-start;

      }
    }
    @media screen and (max-width: 395px) {
      margin: 0 auto;
    }

    @media screen and (max-width: 375px) {
      max-width: calc(100vw - 60px);
    }
  }
`
