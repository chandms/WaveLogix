import { Component, OnInit } from '@angular/core';
import * as olsource from 'ol/source';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Vector } from 'ol/layer';
import { DevicesService } from '../services/devices.service';
import { Device } from '../device/device.component';

@Component({
  selector: 'app-mapmod',
  templateUrl: './mapmod.component.html',
  styleUrls: ['./mapmod.component.css']
})
export class MapmodComponent implements OnInit {
  constructor(private service: DevicesService) { }
  map!: Map;
  zoom: number = 7;
  latitude: number = 40.4259;
  longitude: number = -86.9081;


  ngOnInit(): void {
    this.map = new Map({
      target: 'all_device_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.longitude,this.latitude]),
        zoom: this.zoom
      })
    });

    this.service.allDeviceInfo()
      .subscribe(Response => {
        let markers = new Array;
        Response.forEach((device: Device) => {
          if (device.latitude != null && device.longitude != null){
            let device_location = olProj.fromLonLat([device.longitude, device.latitude]);
            console.log(device_location);
            // markers.push(new Feature({
            //   geometry: new Point(device_location)
            // })) 
            var aFeature = new Feature({
              geometry: new Point(device_location)
            })
            var aFeatureStyle = new Style({
              image: new Icon({
                //src: 'https://thumbs.gfycat.com/EvenRemarkableAnole-max-1mb.gif'
                src: '../../assets/images/star.png'
              })
            })
            aFeature.setStyle(aFeatureStyle)
            markers.push(aFeature);
          }
        })
        let layer = new Vector({
          source: new olsource.Vector({features: markers})  
        })
        this.map.addLayer(layer);
      });
  }

}
