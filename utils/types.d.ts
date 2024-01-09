import Model from 'ember-data/model';
export declare type StrictHTTPVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
export declare type HTTPVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';
export interface HTTPVerbStrictMap {
    GET: 'GET';
    POST: 'POST';
    PUT: 'PUT';
    DELETE: 'DELETE';
    PATCH: 'PATCH';
    OPTIONS: 'OPTIONS';
    HEAD: 'HEAD';
    get: 'GET';
    post: 'POST';
    put: 'PUT';
    delete: 'DELETE';
    patch: 'PATCH';
    options: 'OPTIONS';
    head: 'HEAD';
}
export declare function strictifyHttpVerb<K extends keyof HTTPVerbStrictMap>(notStrict: K): HTTPVerbStrictMap[K];
export declare type EmberDataRequestType = 'findRecord' | 'findAll' | 'query' | 'queryRecord' | 'findMany' | 'findHasMany' | 'findBelongsTo' | 'createRecord' | 'updateRecord' | 'deleteRecord';
export declare type Hook<IN, OUT> = (this: Model, payload: IN) => OUT;
