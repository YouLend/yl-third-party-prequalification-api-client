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

/**
 * The AddressModel model module.
 * @module model/AddressModel
 * @version 1.0
 */
class AddressModel {
    /**
     * Constructs a new <code>AddressModel</code>.
     * @alias module:model/AddressModel
     * @param line1 {String} 
     * @param city {String} 
     * @param region {String} 
     * @param areaCode {String} 
     * @param country {String} 
     */
    constructor(line1, city, region, areaCode, country) { 
        
        AddressModel.initialize(this, line1, city, region, areaCode, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, line1, city, region, areaCode, country) { 
        obj['line1'] = line1;
        obj['city'] = city;
        obj['region'] = region;
        obj['areaCode'] = areaCode;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>AddressModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressModel} obj Optional instance to populate.
     * @return {module:model/AddressModel} The populated <code>AddressModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressModel();

            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('line3')) {
                obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('areaCode')) {
                obj['areaCode'] = ApiClient.convertToType(data['areaCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} line1
 */
AddressModel.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
AddressModel.prototype['line2'] = undefined;

/**
 * @member {String} line3
 */
AddressModel.prototype['line3'] = undefined;

/**
 * @member {String} city
 */
AddressModel.prototype['city'] = undefined;

/**
 * @member {String} region
 */
AddressModel.prototype['region'] = undefined;

/**
 * @member {String} areaCode
 */
AddressModel.prototype['areaCode'] = undefined;

/**
 * @member {String} country
 */
AddressModel.prototype['country'] = undefined;






export default AddressModel;
