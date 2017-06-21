# Goldfish
### Description
A productivity app for Western University students. Currently under development.
### Authors 
Maya Bielecki, Christine Graham, Vivian Yu Wu, 
Casey Graham, William Jackson 
### Usage 

1. Make sure you have node.js installed. Import the project from VCS.
2. One time Process: Install both the NodeJS and AngularJS plugins in Settings>Plugins>Install JetBrains Plugin. 
You will have to search for them by name.
3. One time Process: Go to Run>Edit Configurations>Add New Configuration("+" in upper left corner)>Node.js <br> Working directory should be populated with the file location of the project.
For "Node Interpreter", choose your "node.exe" file. 
For "Javascript file", write "app.js"
5. One time Process: To enable full support, go to Settings>Languages and Frameworks>Node.js and 
   npm. Then, enable Node.js core library.
6. Navigate to the Goldfish folder in the shell and install the dependencies:
```
npm install
```
7. You should now be able to run the back end of the app on port 3000 from the upper right hand sidebar, or with ("Shift" + "F10").
7. To run the front end, use the shell. Navigate to Goldfish/angular-src, and run: 
```
ng serve
```
