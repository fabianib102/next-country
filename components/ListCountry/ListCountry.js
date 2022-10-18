import SingleCountry from "../SingleCountry/SingleCountry"
import { useSelector } from 'react-redux'

const ListCountry = ({ list }) => {

    const countriesSelected = useSelector((state) => state.countries.countriesSelected);

    return (
        <div className="flex flex-wrap">
        {
            list.map(item => (
                <div key={item.cca2} className="w-full lg:w-6/12 xl:w-3/12 p-4">
                    <SingleCountry 
                        name={item.name.common} 
                        population={item.population} 
                        flag={item.flag} 
                        cca3={item.cca3} 
                        region={item.region}
                        isCountrySelected={countriesSelected.findIndex(x=>x.id === item.cca3) > -1}
                    />
                </div>
            ))
        }
        </div>
    )
  }

  export default ListCountry