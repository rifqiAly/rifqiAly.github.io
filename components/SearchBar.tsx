'use client'
import { Input } from "@nextui-org/react";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState("");

    const handleSearch = () => {

    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Input
                    // label="Search"
                    placeholder="What are you looking for?"
                    value={value}
                    onValueChange={setValue}
                />
            </div>
        </form>

    )
}

export default SearchBar