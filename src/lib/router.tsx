import { Router } from '@tanstack/react-router';
import { routeTree } from './routes/rootRoute';
import { createHashHistory } from '@tanstack/react-router';

export const router = new Router({
    routeTree,
    history: createHashHistory(), // ✅ Correct way to enable hash routing
});
