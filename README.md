# Chittr
This is my Year-3 Mobile Application Development project. This project is to help us mimic industry-level work, and will aid in the creation of our E-Portfolio. The app design itself is a platform for microblogging and such would allow the user (You) to interact with it too.

# Functionality
In this app, the functionality comes from a pre built back-end API that was provided to us by our tutor. From this API, my goal was to implement as many endpoints from the API that I could have. For instance, the ability to POST a 'Chit'. This readme will cover each page that I have created in-depth, and will include a instruction guide on how to use the program.

# 1. Installation
If you have all of the required packages needed to create & run a react-native application, then please read on. Otherwise you can find an instruction guide provided by react-native found [here](https://reactnative.dev/docs/getting-started).

# 1.2. Creating a react-native Project
To begin, locate where you want to create your project. Once that's done open up your command line and navigate to said directory (See Img) and once you're in the correct directory enter this line into your terminal: 
```bash
npx react-native init [PROJECT_NAME]
```
Of course, [PROJECT_NAME] is just a placeholder, this is what your application will be called!
**NOTE** Please keep this terminal open as it will be used later.

# 1.3. Opening up your App
Inside of Android Studio, open up a new project [Insert Image of me doing it] and select the Application file inside the newly created project, and open it!

## Running the emulator
Once you have loaded the correct file and waited for the gradle build to complete, at the top you should see a drop down box at the top, and inside that box there should be an option to 'Open AVD Manager'. Create a new emulator and choose which phone you wish (I used the Google Pixel for this project).

# 1.4 Running the app on the emulator
Now for the main part! Once the emulator has fully booted up and you can see the devices home screen, back in your terminal which is directed to the folder where you created the application, navigate into the new folder you created then type the following:
```bash
npx react-native run-android
```

# 1.5 You're ready to go!
That is the steps needed to open my project (Or your own) with react-native! In section 2 you can see a detailed description on each page / file that I've created.
