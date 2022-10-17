import SingleCountry from "../SingleCountry/SingleCountry"

const ListCountry = ({ list }) => {

    console.log("Lista de countries: ", list)

    return (
        <div className="flex flex-wrap">
        {
            list.map(item => (
                <div key={item.cca2} className="w-full lg:w-6/12 xl:w-3/12 p-4">
                    <SingleCountry name={item.name.common} population={item.population} flag={item.flag}/>
                </div>
            ))
        }
        </div>
    )
  }

  export default ListCountry