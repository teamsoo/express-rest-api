# Express Rest Api

Built using the following Javascript components:

* [Express](http://expressjs.com) - Web framework
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [mysql](https://www.npmjs.com/package/mysql) - Node.js driver for mysql
* [piping](https://github.com/mdlawson/piping) - Live code reloading without additional binaries

## Sample Database Setup

```mysql
CREATE DATABASE `todo`;

USE `todo`;

CREATE TABLE `todo`.`todo_list` ( `id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR(100) NOT NULL ,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (`id`)) ENGINE = InnoDB;
```

## Installation

```
$ git clone https://github.com/teamsoo/express-rest-api.git
$ cd express-rest-api
$ npm install
*At this point you can run `node app.js` to test GET request at `http://localhost:4040/todo/`.*
```

## Config Database
See connection.js

## License

[Unlicense](http://unlicense.org/)
