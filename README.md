# kbeautyAPI

This repo was created to be used with kBeautyBuddy.

Check out the kBeautyBuddy Repo [HERE](https://github.com/rjur11/kbeautybuddy)


This API contains data for 50 different korean skincare products, ranging from cleansers, toners, serums, creams, and sunscreens. Each product contains an id, brand, name, productType, benefits array, skinTypes array, and filename property.

Images are hosted in an AWS S3 Bucket.


## Set Up

Clone this down, and `cd` into it.  Then run:

`npm install`
`npm start`


Alternatively, check out the deployed API on [Heroku](https://kbeauty-api.herokuapp.com/api/v1/skincare)

## Endpoints
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all products|`https://kbeauty-api.herokuapp.com/api/v1/skincare`| GET  | none | object with `skincare` property containing an array of all product objects |
|Get single brand|`https://kbeauty-api.herokuapp.com/api/v1/skincare/brand/:brand`     *where`<brand>` will be a string of a brand name* | GET  | none | array of objects associated with that specific brand |
