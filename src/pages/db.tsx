import React from 'react';
import { NextPage } from 'next';
import ManifestHead from '../features/head/ManifestHead';
import Link from '../features/link/Link';
import DbComponent from '../features/db/DbTest';

const IndexPage: NextPage<{ [key in string]?: string }> = () => (
  <div>
    <ManifestHead title="github_pwa sql example" hrefCanonical="/db" />
    <DbComponent />
    <Link href="/index/country">
      <a>index/country</a>
    </Link>
  </div>
);

export default IndexPage;
