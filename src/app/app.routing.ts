import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';
import { DashboardComponent } from "app/dashboard/dashboard.component";

const appRoutes: Routes = [
    {
        path: 'stocks',
        component: StocksComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);