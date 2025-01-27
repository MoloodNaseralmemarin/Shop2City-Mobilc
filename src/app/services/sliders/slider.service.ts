import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from '../../shared/models/sliders/slider.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { IResponseResult } from '../../shared/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private homeSliders: BehaviorSubject<IResponseResult<Slider[]>> = new BehaviorSubject<IResponseResult<Slider[]>>({
    status: 'Pending',
    message: '',
    data: []
  });



  constructor(
    private http:HttpClient
  ) { }

  getSliders(): Observable<IResponseResult<Slider[]>> {

    return this.http.get<IResponseResult<Slider[]>>("/Sliders/GetActiveSliders");
  }
  public getCurrentSliders(): Observable<IResponseResult<Slider[]>> {
    return this.homeSliders;
  }

  public setCurrentSliders(sliders: IResponseResult<Slider[]>) {
    this.homeSliders.next(sliders);
  }
}
