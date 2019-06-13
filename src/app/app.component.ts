import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;state;city;
    cities=['Hyderabad','Kakinada'];
    "States"=
    [
      {"Cities":["Eshkashem","Fayzabad","Jurm","Khandud","Qal'eh-ye Panjeh"],"StateName":"Badakhshan"},
      {"Cities":["Bala Morghab","Qal'eh-ye Naw"],"StateName":"Badgis"},
      
      
      {"Cities":["Deh Rawud","Gaz Ab","Tarin Kawt","Uruzgan"],"StateName":"Uruzgan"},
      {"Cities":["Gardan Diwal","Maydanshahr"],"StateName":"Wardag"},
      {"Cities":["Qalat-e Ghilzay"],"StateName":"Zabul"}
  ]

 
    constructor() { }

    ngOnInit() {
        this.registerForm = new FormGroup({
            firstName:new FormControl("",Validators.required),
            lastName:new FormControl("",Validators.required),
            password:new FormControl("",[Validators.required,Validators.minLength(5)]),
            gender:new FormControl("",[Validators.required]),
            fileName:new FormControl("",[Validators.required]),
            cityName:new FormControl("",[Validators.required]),
            language:new FormControl("",[Validators.required])
           
          
        });
    }
    
    get
     f() { return this.registerForm.controls; }

    onSubmit() {
     this.submitted = true;
            if(this.registerForm.invalid)
            {
                return
            }
            console.log(this.registerForm.value)
           
            this.state=this.States;
           

    }
   
    onChangeState(stateValue)
    {
        //this.city=this.States[stateValue];
       //alert(this.city)
    }
   
   
}
