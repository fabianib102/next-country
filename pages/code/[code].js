import { getDetailCountryByCode, getAllCountries } from "../../services/countryService"
import Layout from "../../components/Layout/Layout"
import Detail from "../../components/Detail/Detail"

const DetailCountry = ({ detail }) => {

    return (
        <Layout nameContinen={`Country: ${detail.name.official}`}>
            <div className="relative md:ml-64 bg-blueGray-100">
                <Detail detail={detail}/>
            </div>
        </Layout>
        
    )
}

export async function getStaticPaths(){
    try {
        const countries = await getAllCountries()
        const paths = countries.map(({cca3})=>({params: {code: cca3}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({params}){
    const detail = await getDetailCountryByCode(params.code)
    return {
        props: {
            detail: detail[0]
        }
    }
}


export default DetailCountry