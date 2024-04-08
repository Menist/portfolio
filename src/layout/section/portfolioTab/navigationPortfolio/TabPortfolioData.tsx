import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
                    {items.map((item, index) => {
                        return <li key={index}>
                            <button onClick={()=>changeFilter(item.status)}>{item.title}</button>
                        </li>
                    })}
                </ul>
            </nav>
        </StyledMenu>
    );
};
const StyledMenu = styled.div`
  nav {
    padding-bottom: 50px;
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

    a {
      color: ${theme.colors.headerText};

      &:hover {
        color: ${theme.colors.primary};
        transition: ${theme.animation.transitionWidth};
      }
    }

    @media screen and (max-width: 820px) {
      ul {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 768px) {
      ul {
        width: 100%;
        position: inherit;
        top: 50%;
        left: 50%;
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
      max-width: calc(98vw - 60px);
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
