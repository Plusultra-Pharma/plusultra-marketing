import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'sales',
        children: [
          {
            path: '',
            loadChildren: () => import('../sales/sales.module').then(m => m.SalesPageModule)
          }
        ]
      },
      {
        path: 'daily-update',
        children: [
          {
            path: '',
            loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
          }
        ]
      },
      {
        path: 'literature-db',
        children: [
          {
            path: '',
            loadChildren: () => import('../literature-db/literature-db.module').then(m => m.LiteratureDbPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../company/company.module').then(m => m.CompanyPageModule)
          }
        ]
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            loadChildren: () => import('../product/product.module').then(m => m.ProductPageModule)
          }
        ]
      },
      {
        path: 'impressum',
        children: [
          {
            path: '',
            loadChildren: () => import('../impressum2/impressum2.module').then(m => m.Impressum2PageModule)
          }
        ]
      },                              
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

