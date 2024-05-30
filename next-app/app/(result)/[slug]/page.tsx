import React from 'react';

interface paramProps {
  params: {
    slug: any;
  };
}

const page = ({ params }: paramProps) => {
  console.log(params.slug);
  return <div>{params.slug}</div>;
};

export default page;
