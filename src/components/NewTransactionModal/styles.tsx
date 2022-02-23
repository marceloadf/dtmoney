import styled from 'styled-components';

export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        padding: 0 0.5rem;
        height: 4rem;

        background: var(--input-background);
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        background-color: var(--green);
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;
        border: 0;
        margin-top: 1rem;

        font-size: 1rem;
        font-weight: 600;
        color: var(--shape);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }


`