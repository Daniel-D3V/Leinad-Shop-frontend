import Image from "next/image";
import { styled } from "styled-components";

export const CardProductImageStyled = styled(Image)`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
`