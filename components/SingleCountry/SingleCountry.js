import { useState } from "react"
import { addCountry, removeCountry } from "../../slices/countrySlice"
import { useDispatch } from "react-redux"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const SingleCountry = ({ name, population, flag, cca3, region, isCountrySelected }) => {

    const [isSelected, setIsSelected] = useState(isCountrySelected)
    const dispatch = useDispatch()

    const handleSelectCountry = (select) => {
        dispatch( !select ? addCountry({
            id: cca3,
            name,
            continent: region
        }) : removeCountry(cca3))
        setIsSelected(!select)
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className={`flex-auto p-4 ${isSelected ? "bg-slate-200":""}`}>

                <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">{name}</h5>
                        <span className="font-semibold text-xl text-blueGray-700">Population: {population}</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-white">
                            {flag}
                        </div>
                    </div>
                </div>

                <p className="text-sm text-blueGray-400 mt-4">
                    <span onClick={()=>{handleSelectCountry(isSelected)}} className={`mr-5 cursor-pointer text-xs inline-block py-1 px-2.5 text-center whitespace-nowrap align-baseline font-bold rounded-full ${isSelected ? "bg-green-500 text-white":"bg-gray-200 text-gray-700"}`}>
                         {isSelected ? "Selected" : "Select"}
                    </span>
                    <Link href={`/code/${cca3}`}>
                        <span className="cursor-pointer inline-block mt-1 whitespace-nowrap">
                            <FontAwesomeIcon icon={faFileCircleExclamation} className="w-6"/>
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SingleCountry