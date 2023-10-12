import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-page0',
  templateUrl: './page0.component.html',
  styleUrls: ['./page0.component.css']
})
export class Page0Component implements OnInit {
  @ViewChildren('farmer') farmerElements!: QueryList<ElementRef>;

  xValue = 0;
  yValue = 0;
  rotateDegree = 0;

  ngOnInit(): void {
    this.farmerElements.changes.subscribe(() => {
      this.update();
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.xValue = event.clientX - window.innerWidth / 2;
    this.yValue = event.clientY - window.innerHeight / 2;
    this.rotateDegree = (this.xValue / (window.innerWidth / 2)) * 20;
    this.update();
  }

  private update(): void {
    this.farmerElements.forEach((el) => {
      const speedx = parseFloat(el.nativeElement.getAttribute('data-speedx')) || 0;
      const speedy = parseFloat(el.nativeElement.getAttribute('data-speedy')) || 0;
      const speedz = parseFloat(el.nativeElement.getAttribute('data-speedz')) || 0;
      const rotatespeed = parseFloat(el.nativeElement.getAttribute('data-rotation')) || 0;

      const isInLeft =
        parseFloat(getComputedStyle(el.nativeElement).left) < window.innerWidth / 2 ? 1 : -1;
      const zValue =
        (this.xValue - parseFloat(getComputedStyle(el.nativeElement).left)) * isInLeft * 0.1;

      el.nativeElement.style.transform = `perspective(2300px) translate(calc(-50% +${
        zValue * speedz
      }px)) translate(calc(-50% +${
        -this.xValue * speedx
      }px)) rotateY(${this.rotateDegree * rotatespeed}deg) translate(calc(-50% +${
        this.yValue * speedy
      }px)) perspective(2300px) translate(${zValue * speedz}px)`;
    });
  }
}


