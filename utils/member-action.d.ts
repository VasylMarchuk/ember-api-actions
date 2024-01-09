import Model from 'ember-data/model';
import { EmberDataRequestType, Hook, HTTPVerb } from './types';
export interface InstanceOperationOptions<IN, OUT> {
    type?: HTTPVerb;
    path: string;
    urlType?: EmberDataRequestType;
    ajaxOptions?: any;
    before?: Hook<IN, any>;
    after?: Hook<any, OUT>;
}
export default function instanceOp<IN = any, OUT = any>(options: InstanceOperationOptions<IN, OUT>): (this: Model, payload: IN) => Promise<OUT>;
