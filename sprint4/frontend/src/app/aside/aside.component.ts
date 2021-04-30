import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  flag = true;
  showAside():void{
    if(this.flag){
      var asideDom:any = document.getElementById('aside');
      asideDom.style.transform = 'translate(0,0)';
    }
    if(!this.flag){
      var asideDom:any = document.getElementById('aside');
      asideDom.style.transform = 'translate(100%,0)';
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
