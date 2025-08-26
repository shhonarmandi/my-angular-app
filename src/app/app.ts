import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private dateAdaptor = inject(DateAdapter<Date>);

  constructor() {
    console.log('App constructor', this.dateAdaptor);
  }

  public switchToEnglish() {
    this.dateAdaptor.setLocale('en');
  }

  public switchToGerman() {
    this.dateAdaptor.setLocale('de');
  }
}
