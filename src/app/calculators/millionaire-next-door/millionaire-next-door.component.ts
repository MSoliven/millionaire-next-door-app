import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';
import { FormatUtil } from '../../formatutil';
import { BaseComponent } from 'src/app/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-millionaire-next-door',
  templateUrl: './millionaire-next-door.component.html',
  styleUrls: ['./millionaire-next-door.component.scss']
})

export class MillionaireNextDoorComponent extends BaseComponent implements OnInit {

  inputForm: any = {};

  public uawNetWorthStr: string = "";
  public aawNetWorthStr: string = "";
  public pawNetWorthStr: string = "";
  public resultsAvailable: boolean = false;

  
  constructor(public override router: Router, public override route: ActivatedRoute, private fb: FormBuilder) {
    super(router, route);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.inputForm = this.fb.group({
      age: [ {value:"30", disabled: false}, Validators.required],
      grossIncome: ["$0"],
      otherIncome: ["$0"],
      inheritance: ["$0"],
      uawNetWorth: [""],
      aawNetWorth: [""],
      pawNetWorth: [""]
    });

    //this.inputForm.controls.age.enable()
  }

  calcExpectedNetWorth(age: number, income: number, inheritance: number): number {
    return (age * income / 10) - inheritance;
  }

  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.warn(this.inputForm.value);

    if (!this.resultsAvailable) {
      let input = this.inputForm.value;
      let age = FormatUtil.parseToNumber(input.age);
      let grossIncome = FormatUtil.parseToNumber(input.grossIncome);
      let otherIncome = FormatUtil.parseToNumber(input.otherIncome);
      let inheritance = FormatUtil.parseToNumber(input.inheritance);

      var aawNetWorth = Math.round(this.calcExpectedNetWorth(age, grossIncome+otherIncome, inheritance));
      var uawNetWorth = Math.round(aawNetWorth / 2);
      var pawNetWorth = Math.round(aawNetWorth * 2);

      this.uawNetWorthStr = FormatUtil.formatCurrency(uawNetWorth, 0);
      this.aawNetWorthStr = FormatUtil.formatCurrency(aawNetWorth, 0);
      this.pawNetWorthStr = FormatUtil.formatCurrency(pawNetWorth, 0);

      this.inputForm.get("age").disable();
      this.inputForm.get("grossIncome").disable();
      this.inputForm.get("otherIncome").disable();
      this.inputForm.get("inheritance").disable();
    }
    else {
      this.ngOnInit();
    }

    this.resultsAvailable = !this.resultsAvailable;
  }

  formatCurrency(e: any) {
    e.target.value = FormatUtil.formatCurrency(FormatUtil.parseToNumber(e.target.value), 0); 
  } 

  formatNumber(e: any) {
    e.target.value = FormatUtil.parseToNumber(e.target.value); 
  } 

}
