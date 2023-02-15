import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);

    setTimeout(() => this.hideSpinner(spinnerType), 2000);
  }

  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType {
  BallAtom = 's1',
  BallScaleMultiple = 's2',
  BallSpinClockwiseFadeRotating = 's3',
}
