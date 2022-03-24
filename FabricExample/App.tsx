import React from 'react';
import WorkletExample from './src/WorkletExample';
// import UIPropsExample from './src/UIPropsExample';
// import ScrollViewExample from './src/ScrollViewExample';
// import AnimatedSensorExample from './src/AnimatedSensorExample';
import { initializeForFabric } from '../src/reanimated2/core';

export default function App() {
  React.useEffect(() => {
    initializeForFabric();
  }, []);

  return <WorkletExample />;
  // return <UIPropsExample />;
  // return <ScrollViewExample />;
  // return <AnimatedSensorExample />;
}
