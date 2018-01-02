import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { MapPopupInfo } from '../../models/map/map-popup-info';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.less']
})
export class MapPopupComponent implements OnInit {

  @Input() popupInfo: MapPopupInfo;
  @ViewChild('viewStatsBtn') viewStatsBtn;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const listener = this.renderer.listen(this.viewStatsBtn.nativeElement, 'click', (evt) => { console.log('clicked'); } );
  }

  onViewStatsClick(cityId: number, provinceId: number) {
    console.log(cityId + ' ' + provinceId);
  }

}
