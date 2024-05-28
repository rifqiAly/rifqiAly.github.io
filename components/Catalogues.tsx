"use client";
import { SearchBar, CustomFilter, ArtiCard } from "@/components";
import { dataProps } from "@/types";
import { Card, CardBody } from "@nextui-org/react";

const Catalogues = ({ data, isDataEmpty }: dataProps) => {
  return (
    <Card>
      <CardBody>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogues</h1>
          <p>Explore articles you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__articles-wrapper">
                {data.map((article: any) => (
                    <ArtiCard key={article.id} data={article} />
                ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2
              className="text-black text-xl 
            font-bold"
            >
              Oops, no result
            </h2>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default Catalogues;
