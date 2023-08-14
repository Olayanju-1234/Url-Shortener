# Url-Shortener
## Description
This is a simple url shortener that uses a mongodb to store the urls and the short urls. It uses a simple hash function to generate the short url. It is a simple project that I made to learn more about mongodb and how to use it with express.

## Installation
To install the project you need to have nodejs and npm installed. Then you need to clone the repository and run `npm install` to install the dependencies. Then you need to create a `default.json` file in config folder and add the following variables:
```
MONGO_URI=<your mongodb uri>
PORT=<the port you want to use>
BASE_URL=<the base url of the server>
```
Then you can run `npm start` to start the server.

## Usage
To use the server you need to send a post request to the `/api/url/shorten` endpoint with the following body:
```
{
  "longUrl": "<the url you want to shorten>"
}
```
Then the server will respond with the shortened url. You can then use the shortened url to redirect to the original url.

Special thanks to [Brad Traversy](www.github.com/bradtraversy) for his [tutorial](https://www.youtube.com/watch?v=Z57566JBaZQ) on this topic.

## Author
[JosephOlayanju](www.github.com/Olaynju-1234)







