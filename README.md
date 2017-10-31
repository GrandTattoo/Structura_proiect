# Structura_proiect

====================================
  |  ~~~ Identify API calls ~~~  |
====================================

Translating text

The URL for an HTTP request has the following format:

https://translation.googleapis.com/language/translate/v2

===================================================
 POST https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY

===================================================
Here is an example HTTP GET request to return a list of supported language codes:

GET https://translation.googleapis.com/language/translate/v2/languages?key=YOUR_API_KEY

===================================================

Detecting the language of a text string

https://translation.googleapis.com/language/translate/v2/detect

Detecting the language of more than one string

POST https://translation.googleapis.com/language/translate/v2/detect?key=YOUR_API_KEY


||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


====================================
 |  ~~~ Identify Components ~~~  |
====================================

-> quotes list
-> a select for languages, if an user want to translate more quotes at once
-> quotes search by key words
-> order quotes
-> favorite quotes ( list) , but i'll need user login (accounts)
-> maybe a quote share between users (optional)
-> a text editor for own quote (optional)
-> user can rate quote
-> user can translate quote (dropdown menu for languages or something like that)


||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


====================================
    |  ~~~ User Actions ~~~  |
====================================

-> quote rate
-> search quote
-> view products in lists or tree
-> add quote
-> share quote
-> add quote to favorite list
-> translate quote
