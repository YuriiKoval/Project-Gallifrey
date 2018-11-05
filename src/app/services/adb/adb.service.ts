import { Injectable } from '@angular/core';
const appuimADB = require('appium-adb');
const  {ADB} = appuimADB;

@Injectable({
  providedIn: 'root'
})
export class AdbService {
  public adb = new ADB();
  constructor() { }

 public installApk(path: string) {
   this.adb.adbExec(['install' , path]).then((e) => { console.log(e); });
  }
}
