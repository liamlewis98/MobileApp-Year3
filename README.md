# Chittr
This is my Year-3 Mobile Application Development project. This project is to help us mimic industry-level work, and will aid in the creation of our E-Portfolio. The app design itself is a platform for microblogging and such would allow the user (You) to interact with it too.

# Functionality
In this app, the functionality comes from a pre built back-end API that was provided to us by our tutor. From this API, my goal was to implement as many endpoints from the API that I could have. For instance, the ability to POST a 'Chit'. This readme will cover each page that I have created in-depth, and will include a instruction guide on how to use the program.

# 1. Installation
If you have all of the required packages needed to create & run a react-native application, then please read on. Otherwise you can find an instruction guide provided by react-native found [here](https://reactnative.dev/docs/getting-started).

## 1.2. Creating a react-native Project
To begin, locate where you want to create your project. Once that's done open up your command line and navigate to said directory (See Img) and once you're in the correct directory enter this line into your terminal: 
```bash
npx react-native init [PROJECT_NAME]
```
Of course, [PROJECT_NAME] is just a placeholder, this is what your application will be called!
**NOTE** Please keep this terminal open as it will be used later.

## 1.3. Opening up your App
Inside of Android Studio, open up a new project and select the Application file inside the newly created project, and open it! As you can see in the image below, I'm adding the project in my route to the file. ![ShowcaseCMD](./readme-images/makingNewProject.png)

### Running the emulator
Once you have loaded the correct file and waited for the gradle build to complete, at the top you should see a drop down box at the top, and inside that box there should be an option to 'Open AVD Manager'. Create a new emulator and choose which phone you wish (I used the Google Pixel for this project). See Image: ![ShowcaseAVDManager](./readme-images/howToFindOutAVD.png)

## 1.4 Running the app on the emulator
Now for the main part! Once the emulator has fully booted up and you can see the devices home screen, back in your terminal which is directed to the folder where you created the application, navigate into the new folder you created then type the following:
```bash
npx react-native run-android
```

## 1.5 You're ready to go!
That is the steps needed to open my project (Or your own) with react-native! In section 2 you can see a detailed description on each page / file that I've created.

# 2 How to use my app
In this section I will walk you through each step in order to use my app as I have designed (feel free to explore the app at any point!)
## Step 1.
You will see a main screen with chits from other users on the service, you can make a start and read through them, and scroll down if there are enough there so you can see how many there are. The content of each chit will be as follows: [Their user ID] - [What they have said in the chit]. Alternatively, you can decide to log in / create an account. {Insert a pic of the main screen?}

### The Chits
You can also press onto the chits (it's a W.I.P at the moment, but in the end it will have the functionality to display the OP (Original Posters) Name, Email (for contacting), and their other chits.

## Step 2.
So now you're on the login page, you can easily create your own account by pressing the 'Create Account Here!' Button. Once you have filled in your: Firstname, Secondname, Email, and Password for the site you will press the 'Create' Button.
**Disclaimer** The reason it makes you sign in again is to ensure that the site functions properly, and signing you in from the create-account page causes issues with trying to log out.

## Step 3.
You will now be able to look at your profile page more in depth, again there's no content there as it hasn't been implemented yet. But at the bottom of the screen, you can see various tabs that are also W.I.P, but they display what they were intended to be.

## Features of the app
In this app, you can't initially see the Post chit button, as this is hidden behind a conditional rendering item that ensures you won't see 'Post chit' before you're actually logged in. However, in the event that you can see it for some reason, I've made sure that if you're not logged in then you won't be able to access it anyways.

# Roadmap for 'Chittr'
The roadmap for this project will continue by completing all of the endpoints. Once all of the endpoints have been completed, I would like to delve much, much further into the design of the project. I want there to be animations when you load onto a specific page, or onto the app in general. I could have background animations that I could create which would be nice. However, due to the limitation of the projects functionality, this may seem to be quite a while away.
