import { styled } from "styled-components";
import { Container as ContainerBootstrap } from "react-bootstrap"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled(ContainerBootstrap)`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;