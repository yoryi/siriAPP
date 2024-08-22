import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Siri.web.ts
// and on native platforms to Siri.ts
import SiriModule from './src/SiriModule';
import SiriView from './src/SiriView';
import { ChangeEventPayload, SiriViewProps } from './src/Siri.types';

// Get the native constant value.
export const PI = SiriModule.PI;

export function hello(): string {
  return SiriModule.hello();
}

export async function setValueAsync(value: string) {
  return await SiriModule.setValueAsync(value);
}

const emitter = new EventEmitter(SiriModule ?? NativeModulesProxy.Siri);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SiriView, SiriViewProps, ChangeEventPayload };
