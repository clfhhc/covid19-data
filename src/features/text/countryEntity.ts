import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Country {
  Country: string;
  Slug: string;
  ISO2: string;
}

const countryAdapter = createEntityAdapter<Country>({
  selectId: (country) => country.ISO2,
  sortComparer: (a, b) => a.ISO2.localeCompare(b.ISO2),
});

export default countryAdapter;
