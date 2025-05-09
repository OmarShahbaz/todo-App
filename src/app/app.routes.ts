import { Routes } from "@angular/router";

import { routes as userRoutes } from "./users/users.route";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUsername, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes : Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            message: 'Hello!'
        },
        resolve: {
            userName: resolveUsername
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];