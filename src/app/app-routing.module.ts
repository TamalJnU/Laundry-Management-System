import { LaundryServiceComponent } from './home/main/laundry-service/laundry-service.component';
import { WashServiceComponent } from './home/main/wash-service/wash-service.component';
import { DryCleaningServiceComponent } from './home/main/dry-cleaning-service/dry-cleaning-service.component';
import { WetCleaningServiceComponent } from './home/main/wet-cleaning-service/wet-cleaning-service.component';
import { ShoeCleaningServiceComponent } from './home/main/shoe-cleaning-service/shoe-cleaning-service.component';
import { CurtainCleaningServiceComponent } from './home/main/curtain-cleaning-service/curtain-cleaning-service.component';
import { BabyDressComponent } from './dry-clean/baby-dress/baby-dress.component';
import { BabyShirtComponent } from './dry-clean/baby-shirt/baby-shirt.component';
import { CartComponent } from './home/cart/cart.component';
import { MainComponent } from './home/main/main.component';
import { AboutComponent } from './registration/about/about.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './crud/create/create.component';
import { EditComponent } from './crud/edit/edit.component';
import { IndexComponent } from './crud/index/index.component';
import { ViewComponent } from './crud/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'crud', component: CreateComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'crud/create', component: CreateComponent },
      { path: 'main', component: MainComponent },
      { path: 'sign-up', component: SignInComponent },
      { path: 'cart', component: CartComponent },
      { path: 'baby-dress-dry', component: BabyDressComponent },


      { path: 'laundry-service', component: LaundryServiceComponent},
      { path: 'wash-service', component: WashServiceComponent},
      { path: 'dry-cleaning-service', component: DryCleaningServiceComponent},
      { path: 'wet-cleaning-service', component: WetCleaningServiceComponent},
      { path: 'shoe-cleaning-service', component: ShoeCleaningServiceComponent},
      { path: 'curtain-cleaning-service', component: CurtainCleaningServiceComponent},
    ]
  },
  //{ path : 'home', redirectTo : HomeComponent},
  { path: 'create', component: CreateComponent },
  { path: 'sign-up', component: CreateComponent },
  //{ path : 'crud/create', component : CreateComponent},
  { path: 'crud/index', component: IndexComponent },
  { path: 'crud/:crudId/view', component: ViewComponent },
  { path: 'crud/:crudId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
