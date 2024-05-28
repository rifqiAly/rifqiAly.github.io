'use client'
import React from 'react'
import { SearchBar, CustomFilter } from '@/components'
import { Card, CardBody } from '@nextui-org/react'
const Catalogues = () => {
    return (
        <Card>
            <CardBody>
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Catalogues
                    </h1>
                    <p>Explore articles you might like</p>

                    <div className='home__filters'>
                        <SearchBar />
                        <div className="home__filter-container">
                            <CustomFilter />
                            <CustomFilter />
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default Catalogues