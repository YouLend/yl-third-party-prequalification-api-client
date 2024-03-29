/**
 * YouLend Third Party Pre Qualification API
 * Through this API you can can check if a merchant pre qualifies for a Youlend loan
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mark.ufland@youlend.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressModel from './AddressModel';

/**
 * The SignificantPersonModel model module.
 * @module model/SignificantPersonModel
 * @version 1.0
 */
class SignificantPersonModel {
    /**
     * Constructs a new <code>SignificantPersonModel</code>.
     * @alias module:model/SignificantPersonModel
     * @param firstName {String} 
     * @param surname {String} 
     * @param address {module:model/AddressModel} 
     * @param dateOfBirth {Date} 
     */
    constructor(firstName, surname, address, dateOfBirth) { 
        
        SignificantPersonModel.initialize(this, firstName, surname, address, dateOfBirth);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, surname, address, dateOfBirth) { 
        obj['firstName'] = firstName;
        obj['surname'] = surname;
        obj['address'] = address;
        obj['dateOfBirth'] = dateOfBirth;
    }

    /**
     * Constructs a <code>SignificantPersonModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignificantPersonModel} obj Optional instance to populate.
     * @return {module:model/SignificantPersonModel} The populated <code>SignificantPersonModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignificantPersonModel();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressModel.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
SignificantPersonModel.prototype['firstName'] = undefined;

/**
 * @member {String} surname
 */
SignificantPersonModel.prototype['surname'] = undefined;

/**
 * @member {module:model/AddressModel} address
 */
SignificantPersonModel.prototype['address'] = undefined;

/**
 * @member {Date} dateOfBirth
 */
SignificantPersonModel.prototype['dateOfBirth'] = undefined;






export default SignificantPersonModel;

