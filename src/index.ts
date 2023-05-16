import omit from 'lodash.omit';

export interface IRouteWrapperProps<IncomingRoute extends { children?: IncomingRoute[] }> {
  // current route to process
  route: IncomingRoute;

  // config of mapReactRoutes
  config: IReactDomRoutesWrapperConfig<IncomingRoute>;
}

export interface IReactDomRoutesWrapperConfig<
  IncomingRoute extends { children?: IncomingRoute[] },
> {
  routes: IncomingRoute[];

  // which fields to remove from incoming route
  fieldsToOmit: (keyof IncomingRoute)[];

  // route wrapper
  wrapRoute: (props: IRouteWrapperProps<IncomingRoute>) => React.ReactNode;
}

/**
 * Wraps route based on provided config
 *
 * @param {IReactDomRoutesWrapperConfig<IncomingRoute>} config
 * @param {IncomingRoute} route
 *
 * @returns {OutcomingRoute}
 */
export const wrapReactDomRoute = <
  IncomingRoute extends { children?: IncomingRoute[] },
  OutcomingRoute extends { children?: OutcomingRoute[] },
>(
  config: IReactDomRoutesWrapperConfig<IncomingRoute>,
  route: IncomingRoute,
): OutcomingRoute => {
  const { fieldsToOmit, wrapRoute } = config;

  return omit(
    {
      ...route,

      element: wrapRoute({ route, config }),

      /**
       * ? - does the route contain children
       */
      children: route.children?.length
        ? // 1 - map them if so
          wrapRoutes<IncomingRoute, OutcomingRoute>({
            routes: route.children,
            fieldsToOmit,
            wrapRoute,
          })
        : // 2 - unset field otherwise
          undefined,
    },
    fieldsToOmit,

    /**
     * Because there is no other way to infer the type. But I feel like I just don't know.
     */
  ) as unknown as OutcomingRoute;
};

/**
 * Wraps each route based on provided config
 *
 * @param {IReactDomRoutesWrapperConfig<IncomingRoute>} config
 *
 * @returns {OutcomingRoute}
 */
export const wrapRoutes = <
  IncomingRoute extends { children?: IncomingRoute[] },
  OutcomingRoute extends { children?: OutcomingRoute[] },
>(
  config: IReactDomRoutesWrapperConfig<IncomingRoute>,
): OutcomingRoute[] => {
  const { routes } = config;

  return routes.map(route => wrapReactDomRoute(config, route));
};
