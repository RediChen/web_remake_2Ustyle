import { ComponentType } from 'react';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';

export interface IDataRouteConfig extends RouteConfig {
    titleZh?: string | undefined;
    titleEn?: string | undefined;
    path?: string | undefined;
    breadcrumb?: string | undefined;
}