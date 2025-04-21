# Demo React Page
A small demo webpage built using React, an open source Javascript library meant to simplify the building of user interfaces.
## Description
This project is an example of a very simple webpage built using a combination React, Typescript and HTML. A number of functions have been left commented to allow for quick reactivation and deactivation of features, which is immediately loaded onto the page.



## How to use

As opposed to my other projects, this is more intended to serve as a reference, allowing me to quickly check how to set up and build certain functions, as I was only recently introduced to React. I am also posting it here in case anyone else finds it useful.

### Components folder
Here is where the different React comonents can be stored. They do not have to be here, but it is useful for organisation. Stored here are examples of different tools, including -

Alert - a simple popup that appears whenever the page is loaded, and will need to have a button included to enable dismissal

Button - a button that can be used to trigger a number of functions, which can be defined in the main app file

ListGroup - a list of strings. This serves as more of an example of layout in HTML, but keeping it as a component allows you to better isolate elements in case any changes need to be made

### index.html
This is the file where you define the layout of your page. In this case, it determines the icon and name of the tab in your browser, defined in the </html> tag, as well as the location of elements on the page, defined in the </style> tag

### App.tsx
The main typescript file that ties everything together. This file is where you will determine which elements appear, using your components, and where, using the html tags defined earlier. As mentioned, there are other functions commented out. To switch between them, simply comment out the included main function (highlight all of it and press ctrl + /), then do the same for the commented function. The change will be automatically updated in your browser.

## Running the page

To run the webpage, you will need to have Node.js on your system, which includes npm. 

https://nodejs.org/en/download

Worth noting, I tried this on my main Windows system, but npm did not install. I then tried on my Linux machine, and it worked without any issues, so your mileage may vary. If you do not have a Linux machine available, I would suggest using a virtual machine client, such as Virtualbox.

To run the page, simply navigate to your main directory (where index.html is stored) and use the command

```
npm dev start
```
The terminal where you run the command will need to be kept open
