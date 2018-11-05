import { Component, OnInit } from '@angular/core';
import { AdbService } from '../../services/adb/adb.service';
import { UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-upload-apk',
  templateUrl: './upload-apk.component.html',
  styleUrls: ['./upload-apk.component.scss']
})
export class UploadApkComponent implements OnInit {

  constructor(private _adbService: AdbService) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(file);
          if (file.type === 'application/vnd.android.package-archive') {
          this._adbService.installApk(file.path);
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

}
