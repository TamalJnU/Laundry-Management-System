import { ViewComponent } from './crud/view/view.component';
import { IndexComponent } from './crud/index/index.component';
import { EditComponent } from './crud/edit/edit.component';
import { CreateComponent } from './crud/create/create.component';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './registration/about/about.component';
import { NavComponent } from './home/nav/nav.component';
import { SideComponent } from './home/side/side.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { DryCleanComponent } from './dry-clean/dry-clean.component';
import { JeansComponent } from './dry-clean/jeans/jeans.component';
import { BabyShirtComponent } from './dry-clean/baby-shirt/baby-shirt.component';
import { BabySuitComponent } from './dry-clean/baby-suit/baby-suit.component';
import { BabyDressComponent } from './dry-clean/baby-dress/baby-dress.component';
import { DressComponent } from './dry-clean/dress/dress.component';
import { ShirtComponent } from './dry-clean/shirt/shirt.component';
import { TShirtComponent } from './dry-clean/t-shirt/t-shirt.component';
import { TopComponent } from './dry-clean/top/top.component';
import { ShortsComponent } from './dry-clean/shorts/shorts.component';
import { ShoesComponent } from './dry-clean/shoes/shoes.component';
import { BootComponent } from './dry-clean/boot/boot.component';
import { BlanketComponent } from './dry-clean/blanket/blanket.component';
import { ThreePieceComponent } from './dry-clean/three-piece/three-piece.component';
import { SuitsComponent } from './dry-clean/suits/suits.component';
import { BlazerComponent } from './dry-clean/blazer/blazer.component';
import { JacketComponent } from './dry-clean/jacket/jacket.component';
import { CoatComponent } from './dry-clean/coat/coat.component';
import { CarpetComponent } from './dry-clean/carpet/carpet.component';
import { SofaComponent } from './dry-clean/sofa/sofa.component';
import { DollsComponent } from './dry-clean/dolls/dolls.component';
import { CartComponent } from './home/cart/cart.component';
import { LaundryServiceComponent } from './home/main/laundry-service/laundry-service.component';
import { WashServiceComponent } from './home/main/wash-service/wash-service.component';
import { DryCleaningServiceComponent } from './home/main/dry-cleaning-service/dry-cleaning-service.component';
import { WetCleaningServiceComponent } from './home/main/wet-cleaning-service/wet-cleaning-service.component';
import { ShoeCleaningServiceComponent } from './home/main/shoe-cleaning-service/shoe-cleaning-service.component';
import { CurtainCleaningServiceComponent } from './home/main/curtain-cleaning-service/curtain-cleaning-service.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent,
    CrudComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SideComponent,
    MainComponent,
    FooterComponent,
    DryCleanComponent,
    JeansComponent,
    BabyShirtComponent,
    BabySuitComponent,
    BabyDressComponent,
    DressComponent,
    ShirtComponent,
    TShirtComponent,
    TopComponent,
    ShortsComponent,
    ShoesComponent,
    BootComponent,
    BlanketComponent,
    ThreePieceComponent,
    SuitsComponent,
    BlazerComponent,
    JacketComponent,
    CoatComponent,
    CarpetComponent,
    SofaComponent,
    DollsComponent,
    CartComponent,
    LaundryServiceComponent,
    WashServiceComponent,
    DryCleaningServiceComponent,
    WetCleaningServiceComponent,
    ShoeCleaningServiceComponent,
    CurtainCleaningServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
