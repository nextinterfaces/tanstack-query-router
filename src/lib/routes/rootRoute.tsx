import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { homeRoute } from './homeRoute';
import { aboutRoute } from './aboutRoute';
import { userRoute } from './userRoute'; // 👈 Add this

export const rootRoute = createRootRoute({
    component: () => (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/user/42">User 42</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    ),
});

export const routeTree = rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    userRoute
]);
