import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestaurantComponent } from "./restaurant-component/restaurant-component";
import { CustomerComponent } from "./customer-component/customer-component";
import { ReservationComponent } from "./reservation-component/reservation-component";
import { AvailableTimeSlotsComponent } from "./available-time-slots-component/available-time-slots-component";


export const routes: Routes = [
    {path: '', component: RestaurantComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'availabletimeslots', component: AvailableTimeSlotsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModul {}