import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GlobalCountryState } from './countrySlice';
import countryAdapter from './countryEntity';

const defaultISO2 = 'US';

const { selectEntities: selectCountries } = countryAdapter.getSelectors(
  (state: GlobalCountryState) => state.country
);

const CountryDiv: FC = () => {
  const [currentIp, setIp] = useState('');
  const [curerentISO2, setISO2] = useState(defaultISO2);

  useEffect(() => {
    const main = async () => {
      const ipData = await axios.get(
        'https://api.kwelo.com/v1/network/ip-address/my'
      );
      const ip = ipData.data || '';
      setIp(ip);
      const { data } = await axios.get(
        `https://api.kwelo.com/v1/network/ip-address/location/${ip}`
      );
      setISO2(data.data?.geolocation?.country?.iso_code || defaultISO2);
    };

    main();
  }, []);

  const countryObj = useSelector(selectCountries) || {};
  return (
    <div>
      <p>{`Your Ip: ${currentIp}`}</p>
      <p>{`Your country: ${countryObj[curerentISO2]?.Country ?? ''}`}</p>
      <p>Powered by Kwelo.com and covid19api.com</p>
    </div>
  );
};

export default CountryDiv;
