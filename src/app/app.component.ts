import { state, style, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('highlight', [
      state('false', style({ 'background-color': 'red', color: 'white' })),
    ])
  ]
})
export class AppComponent {
  highlight = signal(false);
}
