import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('viewer')
  public viewerRef: ElementRef;

  public headerTitle = 'PDFTron - Proof of Concept';
  public footerTitle = '2021';

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }, this.viewerRef.nativeElement).then(webViewerInstance => {
      console.log(webViewerInstance); // Logs the object instance.
    })
  }

}
