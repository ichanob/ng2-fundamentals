import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './user/auth.service'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventService,
    CreateEventComponent,
    CreateSessionComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from'./nav/navbar.component'
import { ToastrService } from'./common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './error/404.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component
    ],
    providers: [
        EventService,
        EventRouteActivator,
        ToastrService,
        EventListResolver,
        AuthService,
        {
             provide: 'canDeactivateCreateEvent',
             useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule{

}

function checkDirtyState(component:CreateEventComponent){
    if (component.isDirty)
    {
        return window.confirm('You have not saved this event, do you really want to cancel?')
    }
    return true
}