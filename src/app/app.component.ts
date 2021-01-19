import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

 rowForm = 
  new FormGroup({
    title: new FormControl('', Validators.required),
    errorValue: new FormControl('', Validators.required),
    divisor: new FormControl( '', Validators.required),
    standardUncertainty: new FormControl( '', Validators.required),
    sensitivityCoefficient: new FormControl( '', Validators.required),
    stdUncertainty: new FormControl( '', Validators.required)
  })


  this.uncertaintyBudgetForm = new FormGroup({
    measurementCase: new FormControl(),
    contributions: new FormArray([]),
    totalUncertainty: new FormControl()
  });


  onSubmit(){}

  onCancel(){}

  addContribution(){}
  
  contributionsControls = <FormArray>this.uncertaintyBudgetForm.get('contributions');
}
