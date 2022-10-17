import ListCountry from '../components/ListCountry/ListCountry'
import Layout from '../components/Layout/Layout'
import { getCountriesByRegion } from '../services/countryService'

const Home = ({ countries }) => {
  return (
    <Layout nameContinen="America">
      <div className="relative md:ml-64 bg-blueGray-100">
        <ListCountry list={countries}/>
      </div>
    </Layout>
  )
}

export async function getServerSideProps () {
  const countries = await getCountriesByRegion('america')
  return {
    props: {
      countries
    }
  }
}

export default Home
