import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Rocket } from '../../interfaces/rocket';
import { GalleriaResponsiveOptions } from 'primeng/galleria';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css'],
})
export class RocketComponent implements OnChanges {
  @Input() rocket?: Rocket;
  responsiveOptions: GalleriaResponsiveOptions[] | undefined;
  images: any[] | undefined;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      
      
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rocket'] && changes['rocket'].currentValue) {
      this.images = this.rocket?.flickr_images.map((imageUrl) => ({
        itemImageSrc: imageUrl,
        thumbnailImageSrc: imageUrl,
      }));
    }
  }
}
