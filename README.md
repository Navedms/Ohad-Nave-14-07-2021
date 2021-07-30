
 
 
 <h3 align="center">React-Native Weather App</h3>


  <p align="center">
    A simple and responsive mobile app for displaying the weather forecast by searching for a location.
</p>




## The app in pictures



<p align="center">The main screen (Tel Aviv and New York):</p><br>
<p align="center"><img width="250" src="https://user-images.githubusercontent.com/56390807/126066169-82f1d026-686d-4917-852e-ea82e94f686e.jpeg"></p><br>
<p align="center"><img width="250" src="https://user-images.githubusercontent.com/56390807/126066172-c1b5ac2d-b3aa-4f39-9eec-d55ea797e7a1.jpeg"></p><br><br>

<p align="center">Fahrenheit:</p><br>
<p align="center"><img style="margin: 30px;" width="250" src="https://user-images.githubusercontent.com/56390807/126066173-d07f35c5-bd00-44a4-b8c9-ded3714257f1.jpeg"></p><br><br>

<p align="center">The location autocomplete component:</p><br>
<p align="center"><img width="250" src="https://user-images.githubusercontent.com/56390807/126066170-0411b752-8c9e-4130-8aca-7c0d2ae051fd.jpeg"></p><br><br>

<p align="center">Add to favorites message:</p><br>
<p align="center"><img style="margin: 30px;" width="250" src="https://user-images.githubusercontent.com/56390807/126066175-f4382886-db0f-4e8b-bb2f-7438c4a61b73.jpeg"></p><br><br>

<p align="center">The favorites screen:</p><br>
<p align="center"><img style="margin: 30px;" width="250" src="https://user-images.githubusercontent.com/56390807/126066176-83f37015-fc68-461a-bf43-207d03d8dc14.jpeg"></p><br><br>

<p align="center">Delete mode:</p><br>
<p align="center"><img width="250" src="https://user-images.githubusercontent.com/56390807/126066177-4455c09a-a825-4e1b-8c82-80e098e48b05.jpeg"></p><br><br>




### Built With

This react-native app was built with these Api and Libraries: 

* [AccuWeather API]
* [Expo]
* [apisauce]
* [react-navigation]
* [dayjs]
* [Bugsnag]
* [react-native-async-storage]
* [expo/vector-icons]
* [react-native-flash-message]
* [expo-av]
* [lottie-react-native]

And more...




## Usage

After downloading and launching the app, You will see two screens. the main screen (WeatherScreen) and the favorites screen (FavoritesScreen):

  ```sh
  WeatherScreen
```
In the main screen we have a search field to search a location’s weather by city name, next to it there is an icon button to add/remove the city from favorites.
Below it, you can see the current weather and a 5-day forecast of the searched location.
And yes, you can click on the current weather temperature unit (C / F) to switch between the units.

  ```sh
  FavoritesScreen
```
In the favorites screen you will find a list of favorite locations. Each location have an ID, name and current weather.

You can make a short press or a long press of any item in the list:

  ```sh
  1. OnPress
```
In this method, clicking on an item will navigate to the main screen showing the details of that location.

  ```sh
  2. OnLongPress
```
In this method, you will enter the Delete mode and will be able to select items from the list, and delete one or more items.



## Contact

Ohad Nave - [My linkedin](https://www.linkedin.com/in/ohadnave/) - ohadnave@gmail.com




## Thanks!
Thank you for checking out my React-Native weather App!

