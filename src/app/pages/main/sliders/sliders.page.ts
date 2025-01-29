import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component,ElementRef,Inject,OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SlidersPage implements  AfterViewInit, OnInit {


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // استفاده از requestAnimationFrame برای اطمینان از مقداردهی صحیح
      const initializeSwiper = () => {
        const swiperContainer = this.elementRef.nativeElement.querySelector('.swiper') as HTMLElement;

        if (swiperContainer) {
          new Swiper(swiperContainer, {
            modules: [Pagination, Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 5000, // کاهش سرعت حرکت به 5 ثانیه
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        } else {
          console.error('Swiper container not found');
        }
      };

      // شروع مقداردهی Swiper با استفاده از requestAnimationFrame
      requestAnimationFrame(initializeSwiper);
    }
  }
}

