import { styled } from "styled-components";
import { UpdatesCardStyled } from "./styles";
import { Col } from "react-bootstrap";
import { UpdatesCardIcon } from "../../../Atoms/UpdatesCard/Icon";
import { UpdatesCardDetails } from "../../../Atoms/UpdatesCard/Details";

export const UpdatesCard = () => {
    return (
        <Col md={6}>
            <UpdatesCardStyled>
                <UpdatesCardIcon />
                <UpdatesCardDetails />
            </UpdatesCardStyled>
        </Col>
    )
}