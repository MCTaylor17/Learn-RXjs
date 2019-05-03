# Preamble:
The following is an 'open sort' into arbitrary categories.  In no particular order, these include:

* Misc
* Limiters
* Batchers
* Bools
* Completionists
* Error Handling
* Emitters
* Splitters
* Joiners
* Switches
* Mappers
* Messaging

Due to the intentionally unstructured sort, the categories a not mutually exclusive.  This is either an indication that I'm mixing two models into one or there are nested relationships.  

Expect change.

I'll be back.

---

## Misc
tap [misc]

---

## Limiters
take [limiters]
delay [limiters]
delayWhen [limiters]
audit [limiters]
sample [limiters]
debounce [limiters]
throttle [limiters]
auditTime [limiters]
debounceTime [limiters]
throttleTime [limiters]
sampleTime [limiters]
timeout [limiters]
timeoutWith [limiters]
distinct [limiters]
distinctUntilChanged [limiters]
distinctUntilKeyChanged [limiters]
skip [limiters]
single [limiters]
first [limiters]
bufferWhen [limiters]
windowWhen [limiters]
observeOn [limiters]
subscribeOn [limiters]
exhaust [limiters, completion]


---

## Batchers
pairwise [batching]
buffer [batching]
bufferCount [batching]
bufferTime [batching]
bufferToggle [batching]
window [batching]
windowCount [batching]
windowTime [batching]
windowToggle [batching]

---

## Bools
every [bools]
sequenceEqual [bools]
isEmpty [bools]

---

## Completionists
reduce [completion]
toArray [completion, batching]
min [completion, mappers, scanners]
max [completion, mappers, scanners]
count [completion, mappers]
concat [completion, joiners]
concatAll [completion, joiners, flatteners]
concatMap [completion, joiners, mappers]
concatMapTo [completion, joiners, mappers]
combineAll [completion, joiners, flatteners]
last [completion]
endWith [completion, mappers]
finalize [completion]
defaultIfEmpty [completion]
repeat [completion, replay]
repeatWhen [completion, replay]
skipLast [completion]
takeLast [completion, batching]
exhaustMap [completion, switches]

---

## Error Handling
retry [error, replay]
retryWhen [error, replay]
catchError [error]
throwIfEmpty [error]
onErrorResumeNext [error]
*throw [error]

---

## Emitters
(Non-Operators)
*ajax
*of
*from
*range
*timer
*interval
*create
*defer
*empty
*fromEvent
*generate

---

## Splitters
partition [splitters]
filter [filters]
groupBy [filters]
find [filters, limiters]
elementAt [filters, limiters]

---

## Joiners
merge [joiners]
mergeAll [joiners, flatteners]
mergeMap [joiners]
mergeMapTo [joiners]
zip [joiners]
zipAll [joiners, flatteners]
combineLatest [joiners]
withLatestFrom [joiners]
race [filters, switches]

---

## Switches
*iif [switches]
switchAll [switches, flatteners]
switchMapTo [switches, mappers, flatteners]
skipUntil [switches]
takeUntil [switches]
skipWhile [switches]
takeWhile [switches]

---

## Mappers
switchMap [mappers]
startWith [mappers]
pluck [mappers]
map [mappers]
mapTo [mappers]
flatMap [mappers, flatteners]
expand [mappers]
findIndex [mappers]
dematerialize [mappers]
materialize [mappers]
ignoreElements [mappers]
scan [mappers]
mergeScan [mappers]
refCount [mappers]
timeInterval [mappers]
timestamp [mappers]

---

## Messaging
multicast [multicasting]
publish [multicasting]
publishBehavior [multicasting]
publishLast [multicasting]
publishReplay [multicasting]
share [multicasting]
shareReplay [multicasting]