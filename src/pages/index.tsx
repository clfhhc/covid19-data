import React, { FC, useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ManifestHead from '../features/head/ManifestHead';
import DynamicStoreWrap, {
  CallbackOnStore,
} from '../utils/redux/DynamicStoreWrap';
import { Country } from '../features/country/countryEntity';
import CountryDiv from '../features/country/CountryDiv';
import { countryReceived } from '../features/country/countrySlice';
import { reducerCombo1 } from '../reducers/reducerCombo';

export interface StaticProps {
  countries: Country[];
}

const callbackOnMount: CallbackOnStore = async (store) =>
  store.injectReducers(reducerCombo1);

const callbackOnUnmount: CallbackOnStore = async (store) =>
  store.removeReducers(['country']);

const IndexPage: NextPage<StaticProps> = ({ countries }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryReceived(countries));
  }, [countries]);

  return (
    <div>
      <ManifestHead title={process.env.FOLDER} hrefCanonical="/" />
      <CountryDiv />
    </div>
  );
};

const IndexPageWrap: FC<StaticProps> = ({ countries }) => (
  <DynamicStoreWrap
    callbackOnMount={callbackOnMount}
    callbackOnUnmount={callbackOnUnmount}
  >
    <IndexPage countries={countries} />
  </DynamicStoreWrap>
);

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

export default IndexPageWrap;
