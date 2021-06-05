import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users : any[] = [];
  user : any = {};

  name = new FormControl('', [Validators.required, Validators.minLength(10), this.fuckValidator]);
  age = new FormControl('', Validators.required);

  myForm = new FormGroup({
    name : this.name,
    age : this.age
  });

  action(): any {
    console.log(this.myForm);
    this.user = {name: this.name.value, age: this.age.value};
    this.users.push(this.user);

    console.log(this.users)
  }

  fuckValidator(inputData: AbstractControl): any{
    if (inputData.value.includes('fuck')){
      return {fuck: true, msg : "Fuck is present here"}
    }
    return null;
  }
}
