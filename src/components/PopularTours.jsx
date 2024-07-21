import React, { useState } from "react";
import PopularCountries from "./PopularCountries";
import { COUNTRIES } from "../data/index";

export default function PopularTours() {
  const [country, setCountry] = useState("asia");

  function handleClick(countries) {
    setCountry(countries);
  }

  return (
    <section className="container px-4 md:px-10 mb-8 mx-auto">
      <p className="mb-8 text-base">
        Traveling allows us to break free from the constraints of our usual
        schedules and offers a fresh perspective on life. Whether it's exploring
        exotic destinations, experiencing diverse cultures, or simply finding a
        tranquil escape in nature, each journey brings unique experiences that
        leave lasting impressions. The memories we create, the people we meet,
        and the stories we collect along the way contribute to a richer, more
        vibrant tapestry of life.
      </p>

      <h2 className="text-2xl mb-4">Popular Countries to visit</h2>

      <div className="mb-4">
        <ul className="flex gap-6">
          <PopularCountries onClick={() => handleClick("asia")}>
            Asia
          </PopularCountries>
          <PopularCountries onClick={() => handleClick("europe")}>
            Europe
          </PopularCountries>
          <PopularCountries onClick={() => handleClick("africa")}>
            Africa
          </PopularCountries>
        </ul>
      </div>

      {/*display the countries lists*/}
      <div className="p-6 bg-slate-800 text-white">
        <p className="mb-4 underline text-lg">{COUNTRIES[country].title}</p>
        <p className="mb-6 text-base">{COUNTRIES[country].description}</p>
        <ul>
          {COUNTRIES[country].list.map((child, id) => (
            <li key={id} className="mb-2 text-base">
              {child}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
