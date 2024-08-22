import * as React from 'react';

import { SiriViewProps } from './Siri.types';

export default function SiriView(props: SiriViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
