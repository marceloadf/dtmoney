import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        
        th{
            color: var(--text-body);
            text-align: left;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5rem;
        }

        td{
            color: var(--text-body);
            text-align: left;
            padding: 1rem 2rem;
            font-weight: 400;
            line-height: 1.5rem;
            background: var(--shape);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.withdrawn{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }
        }
    }
`
