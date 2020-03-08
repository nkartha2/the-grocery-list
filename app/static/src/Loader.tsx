import React from 'react';

type LoaderPropsType = {
  loadingString: string
}

export default function Loader(props: LoaderPropsType) {
  const { loadingString } = props;

  return (
    <div>
      <p>{loadingString}</p>
    </div>
  )
}