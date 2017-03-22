import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventsListComponent} from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component' 
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from'./common/toastr.service'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './error/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        EventRouteActivator,
        ToastrService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule{

}