import { styled } from "styled-components";
import Image from 'next/image';

export const ImageStyled = styled(Image)`
    max-width: 100%;
    width: 100%;
    height: 170px;
    object-fit: fill;
    border-radius: 5px;
    margin-bottom: 10px;
`