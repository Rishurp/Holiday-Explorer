import{ Holiday} from "../types/Holiday"
import axios from "axios"

export const fetchCountries = async(): Promise<string[]> => {
   
        let response = await axios.get("https://holiday-tracker-backend.labs.crio.do/countries");
       return response.data

}

export const fetchHolidays = async (countryName:string): Promise<Holiday[]> => {
    let response = await axios.get(`https://holiday-tracker-backend.labs.crio.do/holidays?country=${countryName}`)
    return response.data
}
