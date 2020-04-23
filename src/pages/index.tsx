import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import ManifestHead from '../features/head/ManifestHead';
import Link from '../features/link/Link';
import { Country } from '../features/text/countryEntity';

export interface Props {
  countries: Country[];
}

const IndexPage: NextPage<Props> = ({ ...appProps }) => {
  return (
    <div>
      <ManifestHead title={process.env.FOLDER} hrefCanonical="/" />
      <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
      <Link href="/">
        <a>index</a>
      </Link>
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
