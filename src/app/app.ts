import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
