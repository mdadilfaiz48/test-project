import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
