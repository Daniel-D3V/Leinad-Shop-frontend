import { styled } from "styled-components";
import { Container as ContainerBootstrap } from "react-bootstrap"

export const Header = styled.header`
    height: 70px;
`;

export const Container = styled(ContainerBootstrap)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;