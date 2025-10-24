import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HighlightStore {
  // Signal, das angibt, ob der Input hervorgehoben werden soll
  highlightEmail = signal(false);

  triggerHighlight() {
    this.highlightEmail.set(true);

    // Nach kurzer Zeit wieder zurücksetzen, damit man es erneut auslösen kann
    setTimeout(() => this.highlightEmail.set(false), 500);
  }
}
