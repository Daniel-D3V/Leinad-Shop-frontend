import { styled } from "styled-components";

export const UpdatesCardDetailsMessagesStyled = styled.p`
    color: ${props => props.theme.texts.subtitle};
    animation: fade-top 0.5s ease;
    margin-bottom: 0;

    @keyframes fade-top {
        from {
            opacity: 0;
            transform: translateY(50%);
        }
    }
`