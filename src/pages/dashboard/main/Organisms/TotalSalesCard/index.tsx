import { toast } from "react-hot-toast"
import { TotalSalesCardDetails } from "../../Atoms/TotalSalesCard/Details"
import { TotalSalesCardSelectButton } from "../../Atoms/TotalSalesCard/SelectButton"
import { ColTotalSalesCardStyled, RowTotalSalesCardStyled, TotalSalesCardStyled } from "./styles"

export const TotalSalesCard = () => {

    const handleClick = () => {

    }

    return (
        <RowTotalSalesCardStyled>
            <ColTotalSalesCardStyled md={12}>
                <TotalSalesCardStyled>
                    <TotalSalesCardDetails time={new Date()} value={200} />
                    <TotalSalesCardSelectButton onClick={handleClick} />
                </TotalSalesCardStyled>
            </ColTotalSalesCardStyled>
        </RowTotalSalesCardStyled>
    )
}