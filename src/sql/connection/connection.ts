import {
  getConnection,
  Connection,
  getConnectionManager,
  EntitySchema,
} from 'typeorm/browser';
import { Country } from '../entities/Country';

const isProd = process.env.ENV === 'production';
const defaultConnectionName = 'sqlJsDb';
export const defaultEntities = [Country];

// either copy the file sql-wasm.wasm from sql.js/dist
// or define locateFile function to retrieve it from a cdn
const locateFile = (filename: string) =>
  `https://cdnjs.cloudflare.com/ajax/libs/sql.js/${process.env.SQL_JS_VERSION}/dist/${filename}`;

interface DbNameOption {
  name?: string;
}

interface DbConnectionOption extends DbNameOption {
  entities?: (Function | string | EntitySchema<any>)[];
  shouldDrop?: boolean;
  shouldClear?: boolean;
}

interface DbLoadingOption extends DbNameOption {
  entities?: (Function | string | EntitySchema<any>)[];
  database: Uint8Array;
}

export const connectDb = async ({
  name = defaultConnectionName,
  entities = defaultEntities,
  shouldDrop = false,
  shouldClear = false,
}: DbConnectionOption) => {
  let connection: Connection;
  if (shouldClear) {
    await window.localforage?.removeItem(name);
  }
  try {
    connection = getConnection(name);
    if (!connection.isConnected) {
      await connection.connect();
    }
  } catch (error) {
    connection = getConnectionManager().create({
      type: 'sqljs',
      sqlJsConfig: { locateFile },
      name,
      location: name,
      autoSave: true,
      entities,
      useLocalForage: true,
      logging: !isProd && ['query', 'schema'],
    });

    if (!connection.isConnected) {
      await connection.connect();
    }
    await connection.synchronize(shouldDrop);
  }
  return connection;
};

export const closeDb = ({ name = defaultConnectionName }: DbNameOption) => {
  const connection = getConnection(name);
  return connection.close();
};

export const removeDb = async ({
  name = defaultConnectionName,
}: DbNameOption) => {
  await closeDb({ name });
  return window.localforage?.removeItem(name);
};

export const loadDbFromFile = async ({
  name = defaultConnectionName,
  entities = defaultEntities,
  database,
}: DbLoadingOption) => {
  const connection = await connectDb({ name, entities });
  await connection.sqljsManager.loadDatabase(database);
  return connection;
};

export const createDbUrl = async ({
  name = defaultConnectionName,
}: DbNameOption) => {
  const connection = await connectDb({ name });
  const arrayBuffer = connection.sqljsManager.exportDatabase();
  const blob = new Blob([arrayBuffer], {
    type: 'application/octet-stream',
  });
  const dbUrl = URL.createObjectURL(blob);

  return dbUrl;
};
