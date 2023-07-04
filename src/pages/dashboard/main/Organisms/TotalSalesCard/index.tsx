import { toast } from "react-hot-toast"
import { TotalSalesCardDetails } from "../../Atoms/TotalSalesCard/Details"
import { TotalSalesCardSelectButton } from "../../Atoms/TotalSalesCard/SelectButton"
import { ColTotalSalesCardStyled, RowTotalSalesCardStyled, TotalSalesCardStyled } from "./styles"

export const TotalSalesCard = () => {
    return (
        <RowTotalSalesCardStyled>
            <ColTotalSalesCardStyled md={12}>
                <TotalSalesCardStyled>
                    <TotalSalesCardDetails time={new Date()} value={200} />
                    <TotalSalesCardSelectButton />
                </TotalSalesCardStyled>
            </ColTotalSalesCardStyled>
        </RowTotalSalesCardStyled>
    )
}