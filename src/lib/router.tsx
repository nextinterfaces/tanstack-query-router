import { Router, createHashHistory } from '@tanstack/react-router';
import { routeTree } from './routes/rootRoute'; // ✅ Use routeTree, not rootRoute directly

export const router = new Router({
    routeTree,
    history: createHashHistory(), // ✅ Enables hash-based routing
});
