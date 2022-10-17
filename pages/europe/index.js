import ListCountry from "../../components/ListCountry/ListCountry"
import Layout from "../../components/Layout/Layout"
import { getCountriesByRegion } from "../../services/countryService"

const Europe = ({ countries }) => {
    return (
        <Layout nameContinen="Europa">
            <div className="relative md:ml-64 bg-blueGray-100">
                <ListCountry list={countries}/>
            </div>
        </Layout>
    )
}

export async function getServerSideProps () {
    const countries = await getCountriesByRegion('europe')
    return {
        props: {
        countries
        }
    }
}

export default Europe