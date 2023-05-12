/// <reference types="react" />
export interface IRouteWrapperProps<IncomingRoute extends {
    children?: IncomingRoute[];
}> {
    route: IncomingRoute;
    config: IReactDomRoutesWrapperConfig<IncomingRoute>;
}
export interface IReactDomRoutesWrapperConfig<IncomingRoute extends {
    children?: IncomingRoute[];
}> {
    routes: IncomingRoute[];
    fieldsToOmit: (keyof IncomingRoute)[];
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
export declare const wrapReactDomRoute: <IncomingRoute extends {
    children?: IncomingRoute[] | undefined;
}, OutcomingRoute extends {
    children?: OutcomingRoute[] | undefined;
}>(config: IReactDomRoutesWrapperConfig<IncomingRoute>, route: IncomingRoute) => OutcomingRoute;
/**
 * Wraps each route based on provided config
 *
 * @param {IReactDomRoutesWrapperConfig<IncomingRoute>} config
 *
 * @returns {OutcomingRoute}
 */
export declare const wrapRoutes: <IncomingRoute extends {
    children?: IncomingRoute[] | undefined;
}, OutcomingRoute extends {
    children?: OutcomingRoute[] | undefined;
}>(config: IReactDomRoutesWrapperConfig<IncomingRoute>) => OutcomingRoute[];
