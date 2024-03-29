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


import ApiClient from "../ApiClient";
import PreQualificationModel from '../model/PreQualificationModel';
import PreQualificationResultDocument from '../model/PreQualificationResultDocument';
import ProblemDetails from '../model/ProblemDetails';

/**
* Requests service.
* @module api/RequestsApi
* @version 1.0
*/
export default class RequestsApi {

    /**
    * Constructs a new RequestsApi. 
    * @alias module:api/RequestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Initiates a prequalification of a merchant for a loan. It will use as much data as it can to do the analysis  so the more data provided the more accurate the result
     * Can add sample as an example here
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiVersion 
     * @param {module:model/PreQualificationModel} opts.preQualificationModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PreQualificationResultDocument} and HTTP response
     */
    requestsPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['preQualificationModel'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'api-version': opts['apiVersion']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = PreQualificationResultDocument;
      return this.apiClient.callApi(
        '/Requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Initiates a prequalification of a merchant for a loan. It will use as much data as it can to do the analysis  so the more data provided the more accurate the result
     * Can add sample as an example here
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiVersion 
     * @param {module:model/PreQualificationModel} opts.preQualificationModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PreQualificationResultDocument}
     */
    requestsPost(opts) {
      return this.requestsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
