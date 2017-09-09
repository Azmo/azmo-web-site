import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-svg-viewer',
  templateUrl: './svg-viewer.component.html',
  styleUrls: ['./svg-viewer.component.css']
})
export class SvgViewerComponent implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: Http) { }

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '80%');
      svg.setAttribute('height', '80%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = this.getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse.text());
    });
  }

  private getAbsolutePathFromSrc(src: string) {
    return src.slice(src.indexOf('assets/') - 1);
  }
}


