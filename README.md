# Search app test assignment

## Background

__MobilePay__ is a mobile payments solution which can be used to send money to your friends or buy goods from merchants. Sometimes our users need help and that is where __MobilePay Support__ steps in. But in order to help user supporters need fast and convenient way to find user between 5 million peers.

To ease life of supporters it was decided to build __MobilePay Support Tool__. Between business and IT it was agreed that building user search is a very good start. It will not only provide search functionality for supporters but also will stand as an entry point for further application navigation.

## Task

You have been assigned to develop search functionality. Our Product Owner and Tech Lead have created and epic. It was broke down into user stories which needs to be delivered by you. You will be assessed by all business/technical requirements listed in the epic, quality over delivery time is expected.

|Epic MOBILEPAY-1|
|----------------|
|As a __MobilePay Support Tool user__  I want to have possibility to search for __MobilePay Users__. Users can be both Private User (simply users) and Business Users (merchants)|
|Business requirements: <ul><li>Application should provide convenient UI to user search.</li><li>Business users and private users have to be shown in same list.</li><li>List has to be ordered by user name.</li><li>Business and private users have to be visually distinct.</li><li>Next to business user VAT number must be shown.</li><li>Next to private user Personal Number has to be shown.</li><li>I should be able to save search results to my computer.</li><li>I want to be able to see progress of search as csv file.</li></ul>
|Technical requirements: <ul><li>Existing Angular application must be extended.</li><li>Improvements of application architecture are welcome.</li><li>Angular CLI to ease scaffolding.</li><li>Backend is not ready yet. ```@search-app/data``` mimics backed.</li><li>As for now only two search results type are known. More are expected to come. Ensure Open/Close principle to show other search results. (For example, search for transaction need is seen on the road-map ).</li><li>As or now only csv export is required, xls export will be needed in future. Code should be flexible enough to change.</li><li>Functionality is over visuals. Don't spent too much time on styling.</li><li>Keep your code clean, stick to OOP and SOLID principles.</li></ul>
|

|User story MOBILEPAY-2|
|----------------------|
|As a __MobilePay Support Tool user__ I want to have possibility to enter search criteria and see users that match that criteria
|Acceptance criteria: <ul><li>When I open application, I am provided with text input that will accept my search criteria.</li><li>After I enter criteria I want to have a button to initiate search</li><li>I would like to see visual indication of search being in progress</li><li>I want to see private and business users in the same list, ordered by name</li><li>Private users should be indicated with appropriate icon</li><li>For private user name and Personal Number must be shown</li><li>Business user should be indicated with appropriate icon.</li><li>For business user name and VAT number must be shown.</li><li>If error occurs I would like to have visual indication for that</li></ul>
|

|User story MOBILEPAY-3|
|----------------------|
|As a __MobilePay Support Tool user__ I want to have possibility to save search result
|Acceptance criteria: <ul><li>Beneath search results "Save" button must be present</li><li>Clicking that button should invoke file download</li><li>File is of csv format.</li><li>File name is ```{search-criteria}-{year-month-day}.csv```</li><li>File contains columns: <ul><li>Search result Item type. Header name __Type__</li><li>Item Name. Header name __Name__</li><li>Search result identifier. Header name __Identifier__. Row should have in that column: for private user __Personal number__; for business user: __VAT Number__</li></ul></li></ul>
|

## Project walk-through

This is a workspace created with Angular CLI version 8.2.0 with default schematics.

### Application

Application is located under ```./src/app/``` folder.
Feel free to change the structure of it to fit your best knowledged (though leaving it as it is definitely is an option, since it has it's reasons 😊)

### Data mock library

There is data mocks library under ```./projects/data/src/lib/data.module.ts``` . It simulates backend behavior in it's worth implementation, thus randomly 1 of 10 reads would throw an error. Read time can take up to 2 seconds.

This library's build output is linked to application via typescript path ```@search-app/data```. Thus in order for the application to run, ```@search-app/data``` has to be build first. ```npm postinstall``` does that, but in case it would fail, keep that in mind.

