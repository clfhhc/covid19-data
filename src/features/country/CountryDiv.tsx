import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { css } from '@emotion/core';
import { AppDispatch } from '../../stores';
import { countryReceived } from './countrySlice';
// import rem from '../../utils/style/rem';
import DynamicStoreWrap, {
  CallbackOnStore,
} from '../../utils/redux/DynamicStoreWrap';
import { reducerCombo1 } from '../../reducers/reducerCombo';
import { Country } from './countryEntity';

interface Props {
  countries: Country[];
}

const CountryDiv: FC<Props> = ({ countries }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(countryReceived(countries));
  }, [countries]);

  return <div />;
};

const callbackOnMount: CallbackOnStore = async (store) =>
  store.injectReducers(reducerCombo1);

const callbackOnUnmount: CallbackOnStore = async (store) =>
  store.removeReducers(['country']);

const CountryDivWrap: FC<Props> = ({ countries }) => (
  <DynamicStoreWrap
    callbackOnMount={callbackOnMount}
    callbackOnUnmount={callbackOnUnmount}
  >
    <CountryDiv countries={countries} />
  </DynamicStoreWrap>
);

export default CountryDivWrap;
