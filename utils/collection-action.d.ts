import Model from 'ember-data/model';
import { EmberDataRequestType, Hook, HTTPVerb } from './types';
export interface CollectionOperationOptions<IN, OUT> {
    type?: HTTPVerb;
    path: string;
    urlType?: EmberDataRequestType;
    ajaxOptions?: any;
    before?: Hook<IN, any>;
    after?: Hook<any, OUT>;
}
export default function collectionOp<IN = any, OUT = any>(options: CollectionOperationOptions<IN, OUT>): (this: Model, payload: IN) => Promise<OUT>;
