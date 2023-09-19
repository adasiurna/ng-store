import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Output()
  showCategory = new EventEmitter<string>();
  categories = ['mugs', 'bowls'];

  onShowCategory(category: string): void {
    console.log('will emit category', category);
    this.showCategory.emit(category);
  }

}
