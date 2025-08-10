import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(public theme: ThemeService) {}
}
