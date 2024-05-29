"use client";
import { SearchBar, CustomFilter, ArtiCard } from "@/components";
import { dataProps } from "@/types";
import { Card, CardBody } from "@nextui-org/react";

const Catalogues = ({ data, isDataEmpty, searchSet, typeSet, periodSet }: dataProps) => {
  return (
    <Card>
      <CardBody>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogues</h1>
          <p>Explore articles you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar searchSet={searchSet}/>
          <div className="home__filter-container">
            <CustomFilter
              payload={[
                { label: "Most Emailed", value: "emailed" },
                { label: "Most Shared", value: "shared" },
                { label: "Most Viewed", value: "viewed" },
              ]}
              placeHolder={"type"}
              typeSet={typeSet}
            />
            <CustomFilter
              payload={[
                { label: "1 day ago", value: "1" },
                { label: "7 days ago", value: "7" },
                { label: "30 days ago", value: "30" },
              ]}
              placeHolder={"period"}
              periodSet={periodSet}
            />
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
