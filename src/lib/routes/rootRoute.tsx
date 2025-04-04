// src/lib/routes/rootRoute.tsx
import {
    createRootRoute,
    createRoute,
    Outlet, Link
} from '@tanstack/react-router';
import { homeRoute } from './homeRoute';
import { aboutRoute } from './aboutRoute';


export const rootRoute = createRootRoute({
    component: () => (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    ),
});

export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
