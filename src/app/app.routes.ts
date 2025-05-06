import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'project',component:ProjectComponent},
    {path:'skills',component:SkillsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent}
];
