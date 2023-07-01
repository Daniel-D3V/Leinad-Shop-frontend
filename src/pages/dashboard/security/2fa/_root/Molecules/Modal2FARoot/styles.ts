import { styled } from "styled-components";

export const Modal2FARootBackdropStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: opacity-in .3s ease;
    
    @keyframes opacity-in {
        from {
            background: rgba(0, 0, 0, 0.0);
        }
    }
`

export const Modal2FARootStyled = styled.div`
    max-width: 650px;
    width: 100%;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    border-radius: 5px;
    padding: 20px;
    animation: scale-in .25s ease;

    @keyframes scale-in {
        from {
            transform: scale(50%);
        }
    }
`