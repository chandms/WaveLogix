import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Sweep } from '../sweep/sweep.component';

@Injectable({
  providedIn: 'root'
})

export class SweepService {
  

  private sweep_url = env.backend_url + '/sweep';
  private download_url = env.backend_url + '/download';

  constructor(private http: HttpClient) { 
    
  }

  getAllSweeps(){
    return this.http.get<Sweep[]>(this.sweep_url);
  }

  getLatestSweep(){
    let params = new HttpParams;
    params = params.append('latest', 'true');
    return this.http.get<Sweep[]>(this.sweep_url, {params})
  }

  getDeviceSweeps(device_name: string){
    let params = new HttpParams;
    params = params.append('device_name', device_name);
    return this.http.get<Sweep[]>(this.sweep_url, {params});
  }

  downloadSweep(sweepID: number): Observable<Blob> {
    let params = new HttpParams;
    params = params.append('id', sweepID);
    return this.http.get(this.download_url, {
      responseType: 'blob',
      params: params
    });
  }

}
