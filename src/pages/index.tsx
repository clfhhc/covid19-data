import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import ManifestHead from '../features/head/ManifestHead';
import { Country } from '../features/country/countryEntity';
import CountryDiv from '../features/country/CountryDiv';

export interface Props {
  countries: Country[];
}

const IndexPage: NextPage<Props> = ({ countries }) => {
  return (
    <div>
      <ManifestHead title={process.env.FOLDER} hrefCanonical="/" />
      <CountryDiv countries={countries} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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
  } as { props: Props };
};

export default IndexPage;
