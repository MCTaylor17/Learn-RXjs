// @flow
import { Observable } from "rxjs";
import { share } from "rxjs/Operators";

// Simple callbacks for subscribing to observables
import { outputLabel } from "./utils/callbacks";


const count$ = Observable.create((observer) => {
  let counter = 0;
  
  setInterval(()=>{
    observer.next("Event " + counter++);
  },1000);
  
}).pipe(
  
  share() // <-- Toggle This!
  
  // When shared, new subscribers will share the existing producer rather than creating their own.
  
  // This is known as a warm observable
  
  // Disabling `share()` will start sub2 with it's own counter.  
  
  // This is known as a cold observable
  
);

// Start sub1
const subs1 = count$.subscribe(outputLabel("Sub1:"));

// Wait two seconds and start sub2
let subs2;
setTimeout(()=> {
  // Sharing will determine if sub2 starts with the same counter as sub1 or a counter of it's own.
  subs2 = count$.subscribe(outputLabel("Sub2:"));
},2000);

// Unsub after three seconds
setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
},5001);