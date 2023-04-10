import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'base-ui-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'base-ui-components',
      directivesProxyFile: '../angular-workspace/projects/angular-ui-components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/angular-ui-components/src/lib/stencil-generated/index.ts',
    }),
  ],
};
