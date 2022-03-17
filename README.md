# Plusultra Pharma - Marketing Application

This Smartphone application is for marketing of Plusultra Pharma in Germany and UK. This application makes the products' up-to-date information quickly visible to the customers.

  ![Application](img/ionic_test.jpg)


# Development/Build Environment

  * OS: Ubuntu 20.04
  * Platform: Node.js v14.19.0, Ionic v5.4.16, Cordova v11.0.0
  * Android: v6, v5, v.4
  * iOS: ?


        $ sudo npm install -g cordova@11.0.0
        $ sudo npm install -g ionic@5.4.16
        $ sudo npm install -g native-run cordova-res
        $ sudo npm install -g @angular/cli


# How to build

      ## Installing environments
      $ ionic cordova platform add android
	  $ ng add @ionic/cordova-builders
      $ ionic cordova plugin add cordova-plugin-inappbrowser
      $ npm install --save @awesome-cordova-plugins/in-app-browser
      $ npm install --save @awesome-cordova-plugins/core
	  

      ## Building Debug Application
      $ ionic cordova build android
        => platforms/android/app/build/outputs/apk/debug/app-debug.apk
       

# Launching test instance

      $ ionic serve -d -b -a -s -p 11111

