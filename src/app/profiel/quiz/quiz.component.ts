import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/components/common/menuitem";
import {MessageService} from "../../common/service/MessageService";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class QuizComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 6;


  vraag1Valid: boolean = false;
  vraag1Data:any;

  vraag2Valid: boolean = false;
  vraag2Data:any;

  vraag3Valid: boolean = false;
  vraag3Data:any;

  vraag4Valid: boolean = false;
  vraag4Data:any;

  vraag5Valid: boolean = false;
  vraag5Data:any;

  vraag6Valid: boolean = false;
  vraag6Data:any;

  vraag7Valid: boolean = false;
  vraag7Data:any;
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.items = [{
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }];
  }


  vraag1Changed(event:any)
  {
    this.vraag1Valid = event.valid;
    this.vraag1Data = event.data;
    console.log(this.vraag1Valid);
    console.log(this.vraag1Data);
  }

  vraag2Changed(event:any)
  {
    this.vraag2Valid = event.valid;
    this.vraag2Data = event.data;
    console.log(this.vraag2Valid);
    console.log(this.vraag2Data);
  }

  vraag3Changed(event:any)
  {
    this.vraag3Valid = event.valid;
    this.vraag3Data = event.data;
    console.log(this.vraag3Valid);
    console.log(this.vraag3Data);
  }
  vraag4Changed(event:any)
  {
    this.vraag4Valid = event.valid;
    this.vraag4Data = event.data;
    console.log(this.vraag4Valid);
    console.log(this.vraag4Data);
  }
  vraag5Changed(event:any)
  {
    this.vraag5Valid = event.valid;
    this.vraag5Data = event.data;
    console.log(this.vraag5Valid);
    console.log(this.vraag5Data);
  }
  vraag6Changed(event:any)
  {
    this.vraag6Valid = event.valid;
    this.vraag6Data = event.data;
    console.log(this.vraag6Valid);
    console.log(this.vraag6Data);
  }
  vraag7Changed(event:any)
  {
    this.vraag7Valid = event.valid;
    this.vraag7Data = event.data;
    console.log(this.vraag7Valid);
    console.log(this.vraag7Data);
  }
  next(){
    if(this.activeIndex ===0)
    {
      if(this.vraag1Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===1)
    {
      if(this.vraag2Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===2)
    {
      if(this.vraag3Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===3)
    {
      if(this.vraag4Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===4)
    {
      if(this.vraag5Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===5)
    {
      if(this.vraag6Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===6)
    {
      if(this.vraag6Valid)
      {
        this.activeIndex ++;
      }
      else
      {
       this.sendError();
      }
    }
  }

  previous(){
    if(this.activeIndex >0 ){this.activeIndex --;}

  }

  sendError(){
    this.messageService.add({
      severity: 'error', summary: 'Niet alles is ingevuld'
    })
  }
}
