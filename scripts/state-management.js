const { 
    BehaviorSubject
} = rxjs;

const {
    map,
    throttleTime
} = rxjs.operators;

const data = {
    alert: null,
};
const data$ = new BehaviorSubject(data);

const getData = (path) => data$.pipe(
    map(data => data[path])
)

const setData = (path, value) => {
    data[path] = value;
    data$.next(data);
}



