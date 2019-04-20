// @flow
import { Observable } from "rxjs";
import { share } from "rxjs/Operators";

// Simple callbacks for subscribing to observables
import { output, error, complete } from "./utils/callbacks";


const observable = Observable.create((observer) => {
  let counter = 0;
  setInterval(()=>{
    observer.next("Event " + counter++);
  },1000);  
}).pipe(
  
  // When shared, new subscribers will share the existing producer rather than creating their own.
  // Disabling `share()` will start sub2 with it's own counter.
  
  // share() // <-- Toggle This!
  
);

const myOutput = string => E => {
  return output(string + " " + E);
}

// Create two subscriptions from one observable
const subscription1 = observable.subscribe(myOutput("Sub1:"), error, complete);
let subscription2;
setTimeout(()=> {
  subscription2 = observable.subscribe(myOutput("Sub2:"), error, complete);
},2000);


// After three seconds
setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
  
},5001);

export default {}