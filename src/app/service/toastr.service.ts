import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Toastr } from '../model/toastr';
  
@Injectable({
 providedIn: 'root'
})
export class ToastrService {
 
 // private toastr: BehaviorSubject<Toastr|null> = new BehaviorSubject(null);
 
 private toastr: BehaviorSubject<any> = new BehaviorSubject({ 
  category: 'success', 
  message: 'Le service de retour utilisateur fonctionne !'
 });
 
 
 public readonly toastr$: Observable<Toastr|null> = this.toastr.asObservable();
 
 constructor() { }
 
 public showToastr(toastr: Toastr): void {
  timer(0, 3000).pipe(take(2)).subscribe(i => {
   if (i == 0) {
    this.toastr.next(toastr);
   } else {
    this.toastr.next(null);
   }
  });
 }

 public closeToastr() {
  this.toastr.next(null);
 }
}