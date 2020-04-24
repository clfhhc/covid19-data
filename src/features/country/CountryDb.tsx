import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createDbUrl, connectDb } from '../../sql/connection/connection';
import Country from '../../sql/entities/Country';
import countryAdapter from './countryEntity';
import { GlobalCountryState } from './countrySlice';

const { selectAll: selectCountries } = countryAdapter.getSelectors(
  (state: GlobalCountryState) => state.country
);

const CountryDb: FC = () => {
  const [dbUrl, setDbUrl] = useState('');

  const handleButtonClick = async () => {
    setDbUrl(await createDbUrl({}));
  };

  const countries = useSelector(selectCountries) || [];

  useEffect(() => {
    const main = async () => {
      if (!countries.length) {
        return;
      }
      const countriesCopy = countries.map((value) => ({
        ...value,
      }));
      const connection = await connectDb({ shouldClear: true });
      await connection.sqljsManager
        .createQueryBuilder()
        .insert()
        .into(Country)
        .values(countriesCopy)
        .execute();
      connection.sqljsManager.saveDatabase();
      connection.close();
    };

    main();
  }, [countries]);

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Create a db
      </button>
      {dbUrl && (
        <a href={dbUrl} download="db.sqlite">
          db_link
        </a>
      )}
      <br />
    </div>
  );
};

export default CountryDb;
