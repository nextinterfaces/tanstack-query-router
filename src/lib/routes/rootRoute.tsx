// src/lib/routes/rootRoute.tsx
import {
    createRootRoute,
    createRoute,
    Outlet,
} from '@tanstack/react-router';
import { homeRoute } from './homeRoute';
import { aboutRoute } from './aboutRoute';

export const rootRoute = createRootRoute({
    component: () => (
        <div>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a>
            </nav>
            <hr />
            <Outlet />
        </div>
    ),
});

export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
