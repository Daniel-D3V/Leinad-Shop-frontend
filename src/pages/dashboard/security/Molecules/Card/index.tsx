import { Col } from "react-bootstrap"
import { CardStyled, LinkStyled } from "./styles"
import { CardIcon } from "../../Atoms/Card/Icon"
import { CardDetails } from "../../Atoms/Card/Details"
import Link from "next/link"

export type CardProps = {
    icon: any,
    title: string,
    description?: string,
    redirectURL: string
}

export const Card = (props: CardProps) => {
    return (
        <Col md={12}>
            <LinkStyled href={props.redirectURL}>
                <CardStyled>
                    <CardIcon icon={props.icon} />
                    <CardDetails title={props.title} description={props.description} />
                </CardStyled>
            </LinkStyled>
        </Col>
    )
}