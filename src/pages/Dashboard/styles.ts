import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #bbe1fa;
    max-width: 450px;
    line-height: 56px;

    margin-top: 45px;
`;

export const Error = styled.span`
    display: block;
    margin-top: 8px;
    color: #c53030;
`;

export const Form = styled.form<FormProps>`
    margin-top: 55px;
    max-width: 700px;

    display: flex;
    input {
        background: ${shade(0.3, '#1b262c')};
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #bbe1fa;
        border: 2px solid ${shade(0.3, '#1b262c')};
        border-right: 0;

        ${(props) =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #bbe1fa;
        }
    }
    button {
        width: 210px;
        height: 70px;
        background: #0f4c75;
        border-radius: 0 5px 5px 0px;
        border: 0;
        color: #bbe1fa;
        font-weight: bold;

        &:hover {
            background: ${shade(0.2, '#0f4c75')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 55px;
    max-width: 700px;

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

        img {
            margin-right: 4px;
            width: 64px;
            height: 64px;
            border-radius: 50%;
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
