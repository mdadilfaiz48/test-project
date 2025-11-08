import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
}
