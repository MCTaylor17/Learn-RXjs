// @flow
import { Observable } from "rxjs";

// Simple callbacks for subscribing to observables
import { output, error, complete } from "./utils/callbacks";


// Manually create an observable
const observable = Observable.create((observer) => {
  // This callback is called a "Producer" because it
  // produces events that will be sent to the subscribers
  
  try {
    // Send messages to subscriber's first callback
    observer.next("Message 1");
    observer.next("Message 2");
    observer.next("Message 3");

    // Repeat every two seconds
    setInterval(()=>{
      observer.next("Repeating");
    },1000);

  } catch(err) {
    
    // Use try/catch to invoke subscriber's second parameter
    observer.error(err);
    
  }
  
});


// Create two subscriptions from one observable
const subscription1 = observable.subscribe(output,error,complete);
const subscription2 = observable.subscribe(output);


// After three seconds
setTimeout(() => {
  
  // Unsubscribe subscription2 when invoked on subscription1
  subscription1.add(subscription2);
  
  // Actually, don't unsub subscription2
  //subscription1.remove(subscription2);
  
  // Invoke subscription1's third callback
  subscription1.unsubscribe();
  
},3001);

export default {}