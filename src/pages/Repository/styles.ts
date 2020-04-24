import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #bbe1fa;
        transition: color 0.2s;
        transition: transform 0.3s;

        &:hover {
            color: ${shade(0.3, '#bbe1fa')};
            transform: translateX(-10px);
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;
    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3282b8;
            }
            p {
                font-size: 18px;
                color: #bbe1fa;
                margin-top: 4px;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;
        color: #bbe1fa;

        li {
            & + li {
                margin-left: 80px;
            }
        }
    }
    span {
        display: block;
        margin-top: 4px;
        color: #3282b8;
    }
`;
export const Issues = styled.div`
    margin-top: 55px;

    a {
        background: ${shade(0.3, '#1b262c')};
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin-left: 0 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3282b8;
            }
            p {
                font-size: 18px;
                color: #bbe1fa;
            }
        }
        svg {
            margin-left: auto;
            color: #bbe1fa;
        }
    }
`;
