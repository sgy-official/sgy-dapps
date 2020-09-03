# SGY DApps Profile Submission Guideline

[![Build Status][ci-badge]][ci-url]

[ci-badge]: https://github.com/openethereum/openethereum/workflows/Build%20and%20Test%20Suite/badge.svg
[ci-url]: https://github.com/sgy-official/sgy-dapps/actions

## Requirements
### Information Preparation
#### Complete project information and related blockchain media reports are appreciated, including but not limited to the following items:

- Official announcement: 
- Project team background:
- Project basic information:
- Media publications:
- Supported Exchanges:

#### Token Profile Submission:
Sample Pull Request (PR): 


### Requirements to the information
#### Completeness and Accuracy of the information
You are responsible for the information you submitted. Please ensure that the token information submitted is concise and accurate. Please refer to the sample PR. Complete information of your project can help SGY team understand your project better, which may speed up the review process. 

In order to ensure the authenticity of the information submitted, please publish an announcement on your website or official social media channels and attach the corresponding link in “Official announcement”. We recommended a format similar to the following:

We are providing XXX DApp's information on SGY. After completion, you can see the logo and full information inside SGY DApps List.

Note:
- 1636 is the PR number, as in: https://github.com/consenlabs/token-profile/pull/1636 
This number is the key to verify yourself as the rightful editor of the information to SGY.
- The token information can only be changed after the official verification

#### Logo Design Requirements
- Size: 120x120 pixels
- Transparent background PNG format
- Brand logo horizontally and vertically centered, as shown below.

![example](./logo.png)


## How it works
*We recommend that you complete the procedures with your developers*

1. Fork the repo to your own github account


2. Clone the repo from your own account, please note: do no clone the origin one directly, but clone the repo you forked
```
git clone git@github.com:xxxxxxxx/syg-dapps.git
cd sgy-dapps/
```


3. Create a new branch (file) and switch to a new branch named by your dapp name
  For example:
```
git branch xxx-app
git checkout xxx-app
```


4. Add a new directory named by your dapp name. 
  For example:
  *xxx-app.json* 


5. Please ensure to use UTF-8 encoding in the json file to avoid Travis-CI build error.The json also needs to use **checksum**.Please check the template file to fill in the complete token information: [$template.json](../dapps/$template.json)


6. Add the token logo to your dapp directory, name it by icon.png with **checksum** .

7. Commit and push the information to your repo
  For example:
```
git add -A
git commit -m "Add xxx app"
git push origin xxx-app
```


8. Under your repo page, click the “New pull request” button. Then, attach the detailed  project information, official announcement and related blockchain media reports. This includes but not limited to the following: (Official announcement; Project team background; Project basic information; Media publications; Supported Exchanges).

9. We will review your PR as soon as possible. If there is no problem with your PR, we will merge it into our master branch. And then your token profile will display in the current SGY App


## Copyright

2020&copy;Singularly LTD.
