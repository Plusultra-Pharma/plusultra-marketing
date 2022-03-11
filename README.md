# Plusultra Pharma - Marketing Application

This Smartphone application is for marketing of Plusultra Pharma in Germany and UK. This application makes the products' up-to-date information quickly visible to the customers.

  ![Application](img/ionic_test.jpg)


# Development/Build Environment

  * OS: Scientific Linux 7.6
  * Platform: Node.js v16.14.0, Ionic v5.4.16, Cordova v11.0.0
  * Android: v6, v5, v.4
  * iOS: ?


# How to build

      ## Installing environments
      $ ionic cordova platform add android
      $ ionic cordova plugin add cordova-plugin-inappbrowser
      $ npm install --save @ionic-native/in-app-browser@4
      $ ionic cordova plugin add cordova-plugin-firebase
      $ npm install --save @ionic-native/firebase@4

      ## Building Debug Application
      $ ionic cordova build android
        => platforms/android/app/build/outputs/apk/debug/app-debug.apk
       

# Launching test instance

      $ ionic serve -d -b -a -s -p 11111

