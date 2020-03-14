# Laravel-React Boilerplate

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* git
* node.js
* npm
* PHP 7.3.9+
* composer
* python3

### Installing

A step by step series of examples that tell you how to get a development env running

Go to your working directory and clone repository

```batch
\> git clone https://github.com/boilerplate.git
```

Webpack is ready to run but u need to change APP_URL in .env file and database credentials

Next, update all dependencies

```batch
\boilerplate> composer update
\boilerplate> yarn install
```

## Developing

Rebuild database after code update:
```batch
\boilerplate> composer update
\boilerplate> composer dump-autoload
\boilerplate> php artisan migrate:refresh --seed
\boilerplate> npm install
```

Rebuilding the docs:
```batch
\boilerplate> php artisan apidocs:generate
```

Rebuilding Ide-Helper (just in case)
Second command will build ide-helper based on database columns
```batch
\boilerplate> php artisan ide-helper:generate
\boilerplate> php artisan ide-helper:models
\boilerplate> php artisan ide-helper:meta
```

Running live preview locally:

watch for changes in files
```batch
\boilerplate> npm run watch
```

### File Structure

/public - main catalog with build app  
/resources/js - react code  
/resources/sass - scss code  
/resources/assets - all assets for project  

#### after any change in assets folder
```batch
\boilerplate> ./copy_assets.sh
```

## Built With

* [ReactJs](https://reactjs.org/) - Frontend framework used
* [npm](https://www.npmjs.com/) - Frontend dependency management

## Made by Sagiys
