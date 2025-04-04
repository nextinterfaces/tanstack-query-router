import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import User from '../../pages/User';

export const userRoute = createRoute({
    path: '/user/$userId',
    getParentRoute: () => rootRoute,
    component: User,
});
