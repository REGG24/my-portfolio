import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbar2Toggled = false;
  @ViewChild('navBar2_links') navBar2_links!: ElementRef<HTMLInputElement>;
  @ViewChild('navBar2_menu') navBar2_menu!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    if(this.navbar2Toggled){
        const links = this.navBar2_links.nativeElement;
        const menuButton = this.navBar2_menu.nativeElement;
        this.renderer.setStyle(links,'animation','moveRight 1s ease-out');
        this.renderer.setStyle(menuButton,'animation','shrink .5s');  
        setTimeout(() => {
          this.navbar2Toggled = !this.navbar2Toggled;
        }, 400);
    }else{
      this.navbar2Toggled = !this.navbar2Toggled;
    }
  }

  choosePage(url?: string) {
    this.navbar2Toggled = false;
    if(url) {
      window.open(url, "_blank");
    }
  }
}
