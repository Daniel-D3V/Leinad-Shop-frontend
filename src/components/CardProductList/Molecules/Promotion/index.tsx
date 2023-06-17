import { styled } from "styled-components";
import { PromotionStyled } from "./styles";
import { DiscountPercentage } from "../../Atoms/DiscountPercentage";
import { OldValuePromotion } from "../../Atoms/OldValuePromotion";

type Props = {
    promotion?: {
        old_value: number,
        value: number,
        discount_percentage: number
    }
}

export const Promotion = ({ promotion }: Props) => {
    return (
        <PromotionStyled active={!!promotion}>
            {promotion && (
                <>
                    <OldValuePromotion value={promotion.old_value ?? 0} />
                    <DiscountPercentage value={promotion.discount_percentage} />
                </>
            )}
        </PromotionStyled>
    )
}