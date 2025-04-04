import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import About from '../../pages/About';

export const aboutRoute = createRoute({
    path: '/about',
    getParentRoute: () => rootRoute,
    component: About,
});
