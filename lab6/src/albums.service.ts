import { Injectable } from '@angular/core';
import {ALBUMS} from './albums';
import {Observable, of} from 'rxjs';
import {Album} from './albumList';
import {Photos} from './albumPhotos';
import {ALBUMPHOTOS} from './photos';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  // options = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  // getAlbums(): Observable<Album[]> {
  //   return of(ALBUMS);
  // }
  //
  // getAlbum(id: number): Observable<Album>{
  //   const album = ALBUMS.find((x) => x.id === id);
  //   return of(album);
  // }
  //
  // getPhoto(id: number): Observable<Photos> {
  //   const photo = ALBUMPHOTOS.find((x) => x.id === id);
  //   return of(photo);
  // }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getPhoto(id: number): Observable<Photos> {
    const photo = ALBUMPHOTOS.find((x) => x.id === id);
    return of(photo);
  }
  addAlbum(album: Album): Observable<Album>{
    return this.http.post<Album>(this.albumsUrl, album, this.headerOption);
  }
  updateAlbum(album: Album): Observable<Album>{
    return this.http.put<Album>(this.albumsUrl, album, this.headerOption);
  }
  deleteAlbum(id: number): Observable<any>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
