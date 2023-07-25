import React from 'react';
import { useQuery } from '@apollo/client';
import FirstRow from './FirstRow/FirstRow';
import SecondRow from './SecondRow/SecondRow';
import ThirdRow from './ThirdRow/ThirdRow';
import { QUERY_MODULE } from '../../Operations/Query';

function ViewCategory() {
  const { data, loading } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64b49575f62ec34fb6e17df7',
    },
  });

  if (loading) return <p>Loading...</p>;

  const { image, text } = data.findForModule;

  return (
    <>
      <FirstRow image={image} text={text} />
      <SecondRow image={image} text={text} />
      <ThirdRow image={image} text={text} />
    </>
  );
}

export default ViewCategory;
