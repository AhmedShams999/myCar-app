"use client"
import { useState } from "react"
import { SearchMenuFacturer } from "."
import Image from "next/image"
import { manufacturers } from "@/constants"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses}: {otherClasses:string})=>(
  <button type="submit" className={` -ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt= "magnifying-glass"
        width={40}
        height={0}
        className=" object-contain"
      />
  </button>
)

function SearchBar({setManufacturer,setModel}:any) {
   const [searchMenufacture,setSearchMenufacture] = useState('')
   const [searchModel,setsearchModel] = useState('')
   const router = useRouter()

   const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      if(searchMenufacture === '' && searchModel === ''){
        return alert("please fill in the search bar")
      }
      setManufacturer(searchMenufacture)
      setModel(searchModel)

    }

  return (
      <form className="searchbar" onSubmit=
      {handleSearch}>
          <div className="searchbar__item">
              <SearchMenuFacturer 
                selected = {searchMenufacture}
                setSelected = {setSearchMenufacture}
              />

              <SearchButton otherClasses="sm:hidden" />
          </div>

          <div className="searchbar__item">
            <Image 
              src='/model-icon.png'
              width={25}
              height={25}
              className=" absolute w-[20px] h-[20px] ml-4"
              alt="model-icon"
              />
            <input 
              type="text"
              name="model"
              value={searchModel}
              onChange={(e)=> setsearchModel(e.target.value)}
              placeholder="Tiguan"
              className="searchbar__input"
              />
              <SearchButton otherClasses="sm:hidden"/>
          </div>
          <SearchButton otherClasses="max-sm:hidden"/>
      </form>
  )
}

export default SearchBar
