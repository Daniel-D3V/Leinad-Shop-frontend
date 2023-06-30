import { OptionProps } from "@/pages/dashboard/_shared/Form/FormControl/Atoms/Select";
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlCountry = () => {
    const countries: OptionProps[] = [
        { content: "Afghanistan", value: "afghanistan" },
        { content: "Argentina", value: "argentina" },
        { content: "Australia", value: "australia" },
        { content: "Brazil", value: "brazil" },
        { content: "Canada", value: "canada" },
        { content: "China", value: "china" },
        { content: "Egypt", value: "egypt" },
        { content: "France", value: "france" },
        { content: "Germany", value: "germany" },
        { content: "India", value: "india" },
        { content: "Italy", value: "italy" },
        { content: "Japan", value: "japan" },
        { content: "Mexico", value: "mexico" },
        { content: "Russia", value: "russia" },
        { content: "South Africa", value: "southafrica" },
        { content: "Spain", value: "spain" },
        { content: "United Kingdom", value: "unitedkingdom" },
        { content: "United States", value: "unitedstates" },
    ];

    return (
        <>
            <FormControl>
                <FormControl.Label htmlFor="country" required={true}>País</FormControl.Label>
                <FormControl.Select options={countries} id="country" value="brazil" />
            </FormControl>
        </>
    )
}