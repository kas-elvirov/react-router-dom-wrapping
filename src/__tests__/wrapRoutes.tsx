import * as React from 'react';

import each from 'jest-each';

import expect from 'expect';

import { wrapRoutes, IReactDomRoutesWrapperConfig } from '../index';

interface IIncomingRoute {
  fieldToOmit1: string;
  fieldToOmit2: string;
  title: string;
  children?: IIncomingRoute[];
}

interface OutcomingRoute {
  title: string;
  children?: OutcomingRoute[];
}

const incomingRoutes: IIncomingRoute[] = [
  {
    fieldToOmit1: 'fieldToOmit1',
    fieldToOmit2: 'fieldToOmit2',
    title: 'first',
    children: [
      {
        fieldToOmit1: 'fieldToOmit1',
        fieldToOmit2: 'fieldToOmit2',
        title: 'first-first',
        children: [
          {
            title: 'first-first-first',
            fieldToOmit1: 'fieldToOmit1',
            fieldToOmit2: 'fieldToOmit2',
          },
        ],
      },
    ],
  },
  {
    fieldToOmit1: 'fieldToOmit1',
    fieldToOmit2: 'fieldToOmit2',
    title: 'second',
    children: [
      {
        fieldToOmit1: 'fieldToOmit1',
        fieldToOmit2: 'fieldToOmit2',
        title: 'second-first',
        children: [
          {
            title: 'second-first-first',
            fieldToOmit1: 'fieldToOmit1',
            fieldToOmit2: 'fieldToOmit2',
          },
        ],
      },
    ],
  },
];

const outcomingRoutes: OutcomingRoute[] = [
  {
    title: 'first',
    children: [
      {
        title: 'first-first',
        children: [
          {
            title: 'first-first-first',
          },
        ],
      },
    ],
  },
  {
    title: 'second',
    children: [
      {
        title: 'second-first',
        children: [
          {
            title: 'second-first-first',
          },
        ],
      },
    ],
  },
];

const successfulConfig: IReactDomRoutesWrapperConfig<IIncomingRoute> = {
  routes: incomingRoutes,
  fieldsToOmit: [
    'fieldToOmit1',
    'fieldToOmit2',
  ],
  wrapRoute: (props) => <div>{props.route.title}</div>,
};

const emptyConfig: IReactDomRoutesWrapperConfig<IIncomingRoute> = {
  routes: [],
  fieldsToOmit: [
    'fieldToOmit1',
    'fieldToOmit2',
  ],
  wrapRoute: (props) => <div>{props.route.title}</div>,
};

const mocks: [string, IReactDomRoutesWrapperConfig<IIncomingRoute>, OutcomingRoute[]][] = [
  [
    'successful state',
    successfulConfig,
    outcomingRoutes,
  ],
  [
    'empty state',
    emptyConfig,
    [],
  ],
];

describe('wrapRoutes states', () => {
  each(mocks).test(
    '%s',
    (_: string, input: IReactDomRoutesWrapperConfig<IIncomingRoute>, expected: OutcomingRoute[]) => {
      expect(wrapRoutes<IIncomingRoute, OutcomingRoute>(input)).toMatchObject(expected);
    },
  );
});
