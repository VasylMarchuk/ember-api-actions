import Model from 'ember-data/model';
import { EmberDataRequestType } from './types';
/**
 * Given a record, obtain the ember-data model class
 * @param record
 */
export declare function _getModelClass<M extends typeof Model>(record: InstanceType<M>): M;
/**
 * Given an ember-data model class, obtain its name
 * @param clazz
 */
export declare function _getModelName(clazz: typeof Model): string;
/**
 * Given an ember-data-record, obtain the related Store
 * @param record
 */
export declare function _getStoreFromRecord(record: Model): any;
/**
 *
 * @param record
 * @param opPath
 * @param urlType
 * @param instance
 */
export declare function buildOperationUrl<M extends Model>(record: M, opPath: string, urlType: EmberDataRequestType, instance?: boolean): any;
export default buildOperationUrl;
