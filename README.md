# yl-third-party-prequalification-api-client

YlThirdPartyPrequalificationApiClient - JavaScript client for yl-third-party-prequalification-api-client
Through this API you can can check if a merchant pre qualifies for a Youlend loan
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install yl-third-party-prequalification-api-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your yl-third-party-prequalification-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var YlThirdPartyPrequalificationApiClient = require('yl-third-party-prequalification-api-client');

var defaultClient = YlThirdPartyPrequalificationApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new YlThirdPartyPrequalificationApiClient.RequestsApi()
var opts = {
  'apiVersion': "apiVersion_example", // {String} 
  'preQualificationModel': new YlThirdPartyPrequalificationApiClient.PreQualificationModel() // {PreQualificationModel} 
};
api.requestsPost(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://dev.youlendapi.com/prequalification*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*YlThirdPartyPrequalificationApiClient.RequestsApi* | [**requestsPost**](docs/RequestsApi.md#requestsPost) | **POST** /Requests | Initiates a prequalification of a merchant for a loan. It will use as much data as it can to do the analysis  so the more data provided the more accurate the result


## Documentation for Models

 - [YlThirdPartyPrequalificationApiClient.AddressModel](docs/AddressModel.md)
 - [YlThirdPartyPrequalificationApiClient.FinancialDataModel](docs/FinancialDataModel.md)
 - [YlThirdPartyPrequalificationApiClient.InvoiceDataRowModel](docs/InvoiceDataRowModel.md)
 - [YlThirdPartyPrequalificationApiClient.LoanOptionDocument](docs/LoanOptionDocument.md)
 - [YlThirdPartyPrequalificationApiClient.PaymentDataRowModel](docs/PaymentDataRowModel.md)
 - [YlThirdPartyPrequalificationApiClient.PreQualificationModel](docs/PreQualificationModel.md)
 - [YlThirdPartyPrequalificationApiClient.PreQualificationResultDocument](docs/PreQualificationResultDocument.md)
 - [YlThirdPartyPrequalificationApiClient.ProblemDetails](docs/ProblemDetails.md)
 - [YlThirdPartyPrequalificationApiClient.PurchaseDataRowModel](docs/PurchaseDataRowModel.md)
 - [YlThirdPartyPrequalificationApiClient.SignificantPersonModel](docs/SignificantPersonModel.md)


## Documentation for Authorization



### oauth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
