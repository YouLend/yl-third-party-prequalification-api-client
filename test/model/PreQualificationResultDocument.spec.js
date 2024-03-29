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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YlThirdPartyPrequalificationApiClient);
  }
}(this, function(expect, YlThirdPartyPrequalificationApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PreQualificationResultDocument', function() {
    it('should create an instance of PreQualificationResultDocument', function() {
      // uncomment below and update the code to test PreQualificationResultDocument
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be.a(YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument);
    });

    it('should have the property thirdPartyMerchantId (base name: "thirdPartyMerchantId")', function() {
      // uncomment below and update the code to test the property thirdPartyMerchantId
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

    it('should have the property overallCreditRiskScore (base name: "overallCreditRiskScore")', function() {
      // uncomment below and update the code to test the property overallCreditRiskScore
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

    it('should have the property overrideCreditRiskScore (base name: "overrideCreditRiskScore")', function() {
      // uncomment below and update the code to test the property overrideCreditRiskScore
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

    it('should have the property loanOptions (base name: "loanOptions")', function() {
      // uncomment below and update the code to test the property loanOptions
      //var instane = new YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument();
      //expect(instance).to.be();
    });

  });

}));
