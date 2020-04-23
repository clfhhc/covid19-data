import { connectDb } from '../connection/connection';
import { Country } from '../entities/Country';

const main = async () => {
  const connection = await connectDb({});
  await connection.synchronize(false);
  const country = new Country();
  country.Country = 'China';
  country.ISO2 = 'cn';
  country.Slug = 'china';

  const countryRepository = connection.getRepository(Country);
  await countryRepository.save(country);
};

export default main;
