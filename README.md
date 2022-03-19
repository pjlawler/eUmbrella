
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 # eUmbrella
 ## *Table of Contents*
1. [Description](#description)
2. [Usage Information](#usage-information)
3. [Installation Instructions](#installation-instructions)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License Info](#license-info)

 _ _ _
 ## *Description*
 ### My week #13 - Object-Relational Mapping (ORM) Challenge: E-commerce Back End
     
 Walkthrough Video: [https://drive.google.com/file/d/1TkxzAb8hvMORp8hTVmlzI-ajZM8yIgth/view](https://drive.google.com/file/d/1TkxzAb8hvMORp8hTVmlzI-ajZM8yIgth/view)
 
 _ _ _
 ## *Usage Information*
  This is a back-end server and mysql2 manager, which is designed to be a front-end database interface utilizing API routing.  Technolgies used: Node.js, Express.js, Sequelize, dotenv.

  To create the database, run 'source db/schema.sql' from the mysql shell, then seed the database by running 'npm run seed' from the terminal.  Finally, to start the server and sync it to your mysql database, run 'npm start'.

  Available CRUD routes:

### POST
  - **/api/tags/**
  - Create new tag - example body 
    ``` 
    { 
      "tag_name":"Manager's Favorite"
    }
    ```
  - **/api/product/**
  - Create a new product - example body
  ```
    {
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "category_id": 1
      "tagIds": [1, 2, 3, 4]
    }
  ```
  - **/api/category/** 
  - Create a new category - example body
  ```
  {
    "category_name":"Sporting Goods"
  }
  ```

### GET
  - **/api/tags/**
  - **/api/tags/:id** 
  - **/api/products/** 
  - **/api/products/:id** 
  - **/api/categories/**
  - **/api/categories/:id** 

### PUT
- **/api/tags/:id**
- **/api/products/:id**
- **/api/categories/:id**

### DELETE
- **/api/tags/:id**
- **/api/products/:id**
- **/api/categories/:id**
  - - -
 ## *Installation Instructions*
  After downloading files, make sure you run 'npm i' to install packages.  Also, create an .env from the .env.example utilizing your personal mysql user account information.
  - - -
 ## *Tests*
  Utilize an API Client such as Insomnia or Postman to test the api routes.
  - - -
 
 ## *Questions*
 ###   For questions or comments concerning this project please contact, Patrick Lawler, the author, owner and manager the work via either github or email. Links for each are listed below.
 - GitHub: [pjlawler](https://github.com/pjlawler)
 - eMail: patlaw777@icloud.com
 
 - - -
 
 ## *License Info*
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  Copyright Ⓒ 2022 Patrick Lawler
      
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.