![npm bundle size](https://img.shields.io/bundlephobia/min/react-router-dom-wrapping) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/kas-elvirov/react-router-dom-wrapping) <!-- ![npm-donwloads-per-week](https://img.shields.io/npm/dw/react-router-dom-wrapping) --> ![npm-donwloads-per-year](https://img.shields.io/npm/dy/react-router-dom-wrapping)

---

# react-router-dom-wrapping

Custom route wrapping functionality for react-router-dom

## Install

```
$ npm install --save react-router-dom-wrapping
```
or
```
$ yarn add react-router-dom-wrapping
```

## API

### wrapRoutes({ routes, fieldsToOmit, wrapRoute })

#### routes

Type: `IncomingRoute[]`. `IncomingRoute extends { children?: IncomingRoute[] }`

#### fieldsToOmit

Type: `(keyof IncomingRoute)[]`

#### wrapRoute

Type: `(props: IRouteWrapperProps<IncomingRoute>) => React.ReactNode`

- `route` IncomingRoute
- `config` IReactDomRoutesWrapperConfig<IncomingRoute>

## Usage

```tsx

/**
 * - title setting
 * - lazy loading (Suspence)
 * - ErrorBoundary
 */
export const RouteWrapper: FC<TExtendedRouteObject> = ({ element, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const pendingMessage = useMemo(() => `Page is loading - ${title}`, [title]);

  return (
    <Suspense fallback={<div>{pendingMessage}</div>}>
      <ErrorBoundary>
        {element}
      </ErrorBoundary>
    </Suspense>
  );
};


const config: IReactDomRoutesWrapperConfig<IIncomingRoute> = {
  routes: [
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
            }
          ],
        }
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
            }
          ],
        }
      ],
    },
  ],
  fieldsToOmit: [
    'fieldToOmit1',
    'fieldToOmit2',
  ],
  wrapRoute: (props) => <RouteWrapper element={<div>test<div/>} title={props.route.title} />,
};

const routes = wrapRoutes<IIncomingRoute, OutcomingRoute>(config);

```

## TODO

- [+] implementation
- [+] units
- [+] docs
- [+] scripts for npm
- [+] publish (github, npm)
- [ ] badges (ci, coverage)
- [ ] add to corporate registry
- [ ] tell friends
- [ ] custom omit

## License

MIT © [Kas Elvirov](http://www.kas-elvirov.com/)
