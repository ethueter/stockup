import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    return <Route {...rest} component={Component} />;
};