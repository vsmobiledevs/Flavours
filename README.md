# App Security

We will use **react-native-config** package to achieve this goal. It allows us to set up different configuration files for different environments. It advocates for **twelve-factor** configuration management which, summed up, is:

Apps sometimes store config as constants in the code. This is a violation of **twelve-factor**, which requires strict separation of config from code. Config varies substantially across deploys, code does not.
A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials. So with that in mind we know that our **SERVER_URL** and **GOOGLE_API_KEY** should not be in our code.

# Multienvironment

We can create different environments which we need like development, quality assurance, production etc in the root folder of the project. Environment specific builds give us a way to:

Change the values of variables at build time.
Change app/bundle ids to allow the installation of any environment variant on the same device at the same time.
Change the icon for each build variant.
Change the display name of the app.
Change the app launch screen.

# Multienvironment Setup on Android

Place your precious keys in these environments.
Add folders for each environment under android > app > src
Add configurations in buid.gradle(app) file.
Use environmental keys in the file you need.
Add scripts to run the different builds.

# Multienvironment Setup on iOS

Place your precious keys in these environments.
Add targets like development, quality assurance, production etc. It will automatically creates Info.plist respectively. Duplicates the main traget always.
Manage different schemes.
