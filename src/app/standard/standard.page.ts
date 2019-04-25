import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.page.html',
  styleUrls: ['./standard.page.scss'],
})
export class StandardPage implements OnInit {
  firstValue = 0;
  secondValue = 0;
  resultLog = "";
  result = "";
  operator = "";
  total = 0;
  constructor() { }

  ngOnInit() {
    this.result;
    this.resultLog;
  }

  one() {
    return this.result = this.result + "1";
  }

  two() {
    return this.result = this.result + "2";
  }

  three() {
    return this.result = this.result + "3";
  }

  four() {
    return this.result = this.result + "4";
  }

  five() {
    return this.result = this.result + "5";
  }

  six() {
    return this.result = this.result + "6";
  }

  sevent() {
    return this.result = this.result + "7";
  }

  eight() {
    return this.result = this.result + "8";
  }

  nine() {
    return this.result = this.result + "9";
  }

  zero() {
    return this.result = this.result + "0";
  }

  point() {
    return this.result = this.result + ".";
  }

  delete() {
    this.result = "";
  }

  reset() {
    this.firstValue = 0;
    this.secondValue = 0;
    this.resultLog = "";
    this.result = "";
    this.operator = "";
    this.total = 0;
  }

  tambah() {
    this.resultLog = this.resultLog + this.result + "+";
    this.result = "";
  }

  kurang() {
      this.resultLog = this.resultLog + this.result + "-";
      this.result = "";
  }

  kali() {
    this.resultLog = this.resultLog + this.result + "*";
    this.result = "";
  }

  bagi() {
    this.resultLog = this.resultLog + this.result + "/";
    this.result = "";
  }

  samaDengan() {
    this.resultLog = this.resultLog + this.result;
    this.result = eval(this.resultLog);
    this.resultLog = "";
  }

  kuadrat() {
    this.result = Math.pow(parseFloat(this.result),2).toString();
  }

  persent() {
    this.resultLog = (parseFloat(this.result) / 100).toString() + "*";
    this.result = "";
  }
}
