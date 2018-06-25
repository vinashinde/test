import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from "./people-list/people-list.component";

// HERE: new import
import { PersonDetailsComponent } from "./person-details/person-details.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },

  // HERE: new route for PersonDetailsComponent
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },

  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
