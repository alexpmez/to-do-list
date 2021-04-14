import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent },
  { path: 'contact', component: ContactUsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}