import { Route, Router } from '@tanstack/react-router';
import { rootRoute } from './routes/rootRoute';

export const router = new Router({ routeTree: rootRoute });
