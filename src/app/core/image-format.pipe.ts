import { Pipe, PipeTransform } from '@angular/core';
import { IMG } from './images.const';

@Pipe({
  name: 'ImageFormat'
})
export class ImageFormatPipe implements PipeTransform {
  transform(value: number, size: string): string {
    let path: string = 'assets' + IMG.find(item => item.id === value).img.small;
    if (size === 'large') {
      path = 'assets' + IMG.find(item => item.id === value).img.large;
    }
    return path;
  }
}
