import { styled } from "styled-components";
import { RowCards } from "../../Molecules/RowCards";
import { Col } from "react-bootstrap";

export const RowTotalSalesCardStyled = styled(RowCards)``
export const ColTotalSalesCardStyled = styled(Col)``

export const TotalSalesCardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 20px 10px;
    border-radius: 5px;
`