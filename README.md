# Mini Stock Tracker

## Introduction

Mini Stock Tracker is a simple web application that allows users to track stock prices from a predefined list. It periodically updates the stock prices and displays them in real-time without the need for a full page refresh.

## Technologies Used

- ReactJS
- JavaScript
- Express
- Node.js
- MongoDB

## Features

### Stock Selector
- A dropdown menu where users can select a stock from a predefined list.

### Price Display
- The application displays the current price of the selected stock.
- Prices are updated every minute without a full page refresh.

### Project Structure
- The project is organized into two main directories: client and server.
- The client directory contains the React frontend of the application.
- The server directory contains the Express.js backend responsible for handling data and updates.

### Usage
- Launch the Mini Stock Tracker application using the instructions in the "Getting Started" section.
- Select a stock from the dropdown menu.
- The current price of the selected stock will be displayed, and it will automatically update every minute to reflect the latest price.

### Database
The application uses MongoDB to store the list of predefined stocks and their current prices. The data schema can be found in the server directory.

### Sample JSON Data
You can find sample JSON data for predefined stocks [Here](https://gist.github.com/tanveery/4ac939d2ad27954da4c8db13e10ef7bd)
. You can use this data to populate your database with predefined stocks and their initial prices.

#### Note: The stock prices are randomly generated. This application does not provide real-world stock data.
 
