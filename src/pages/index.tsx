import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ManifestHead from '../features/head/ManifestHead';
import countryAdapter, { Country } from '../features/country/countryEntity';
import CountryDiv from '../features/country/CountryDiv';
import { GlobalCountryState } from '../features/country/countrySlice';

export interface StaticProps {
  countries: Country[];
}

export interface InitialProps {
  ip: string;
}

const { selectEntities: selectCountries } = countryAdapter.getSelectors(
  (state: GlobalCountryState) => state.country || {}
);

const IndexPage: NextPage<StaticProps & InitialProps, InitialProps> = ({
  countries,
  ip,
}) => {
  const [currentIp, setIp] = useState('');
  const [curerentISO2, setISO2] = useState('');

  useEffect(() => {
    const main = async () => {
      setIp(ip);
      const { data } = await axios.get(
        `https://api.kwelo.com/v1/network/ip-address/location/${ip}`
      );
      console.log(data);
      setISO2(data?.data?.geolocation?.country?.iso_code || '');
    };

    main();
  }, [ip]);

  const countryObj = useSelector(selectCountries) || {};
  return (
    <div>
      <ManifestHead title={process.env.FOLDER} hrefCanonical="/" />
      <p>{`Your Ip: ${currentIp}`}</p>
      <p>{`Your country: ${countryObj[curerentISO2]?.Country ?? ''}`}</p>
      <CountryDiv countries={countries} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const countries = (
    await axios.get('https://api.covid19api.com/countries').catch((err) => {
      console.log(err);
      return { data: [] };
    })
  ).data as Country[];
  return {
    props: {
      countries,
    },
  } as { props: StaticProps };
};

export default IndexPage;
