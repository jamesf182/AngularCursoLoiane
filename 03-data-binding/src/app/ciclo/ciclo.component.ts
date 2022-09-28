import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    console.log('01 - constructor');
  }

  ngOnChanges() {
    console.log('02 - ngOnChanges');
  }

  ngOnInit() {
    console.log('03 - ngOnInit');
  }

  ngOnDestroy() {
    console.log('04 - ngOnDestroy');
  }

  ngAfterViewChecked() {
    console.log('05 - ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('06 - ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('07 - ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('08 - ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('09 - ngDoCheck');
  }
}
