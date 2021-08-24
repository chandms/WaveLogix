import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Device } from '../device/device.component';

@Injectable({
  providedIn: 'root'
})

export class DevicesService {

  private url = env.backend_url + '/device';

  constructor(private http: HttpClient) { }

  getDeviceInfo(device_name: string){
    let params = new HttpParams;
    params = params.append('device_name', device_name);
    return this.http.get<Device>(this.url, {params: params});
  }

  allDeviceInfo(){
    return this.http.get<Device[]>(this.url);
  }

  updateLocation(
    device_id: number,
    latitude: number,
    longitude: number
  ){
    let body = {
      'device_id': device_id,
      'latitude': latitude,
      'longitude': longitude
    };
    console.log(body);
    return this.http.post(this.url, body);
  }
}
