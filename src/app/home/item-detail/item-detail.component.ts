import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { DataService, DataItem } from '../../shared/data.service'

@Component({
  selector: 'ItemDetail',
  templateUrl: './item-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  item: DataItem;
  textInput: string = '679'; // added to test to see if two way binding works

  constructor(
    private _data: DataService,
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    console.log('test')
    const id = +this._route.snapshot.params.id
    this.item = this._data.getItem(id)
  }

  // this function gets called twice.  First time, the value is the latest input.  Second call, the last text input character is missing, unless backspace is pressed  
  tester(event) {
    console.log('event.value', event.value);
    this.textInput = event.value;
    console.log('after', this.textInput)
  }

  // test button
  test() {
    console.log('textInput:', this.textInput);
  }

  onBackTap(): void {
    this._routerExtensions.back()
  }
}
