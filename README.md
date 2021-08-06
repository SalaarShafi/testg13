Here's a link to the deployed project: https://users-database-salaar-shafi.netlify.app/


After making the react app I formatted the index.html sent in the stratex file manually and pasted in a main app.js file which was being imoprted into index.js which was inturn linked to the public html file for the web page using ReactDom. 

Then in order to break the project down the project to manageable and sole functionalities the users, seniorUsers and wfm files were created which housed the looping functionalities to get the data from the main data file, filter and subsequently use the relevant data objects for the specific grouping and display them visually on the screen in these groups. JSX components were used to fit the data from the previously mentioned data objects and integrate it into the main component in the app.js file.   

The delete button in every group simply uses the filter functionality to loop every data object and return only those data objects that do not match every property of the object we want to delete which is sent in for comparison by the event handler function defined in the onClick event present in the respective group and row. After filtering out the remaining data objects the data state is set with these filtered objects which is imported in the grouped files for integration into the component save ofcourse the filtered data objects. 
