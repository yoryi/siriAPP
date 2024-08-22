import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SiriViewProps } from './Siri.types';

const NativeView: React.ComponentType<SiriViewProps> =
  requireNativeViewManager('Siri');

export default function SiriView(props: SiriViewProps) {
  return <NativeView {...props} />;
}
