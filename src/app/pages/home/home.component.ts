import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('lImage') lImage! : ElementRef;
  imageLoaded: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
      setTimeout(() => {
        this.imageLoaded=true;
      },400);   
  }

  

  setImageLoaded() {
    //this.imageLoaded = true;
  }


}
