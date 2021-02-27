
<!-- TOC ignore:true -->
# Vice React, React Query, FeatherJs Boilerplate - API
API for Vice Software&#39;s react, react-query and feathersjs boilerplate.

> **Note:** This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

> **Note:** we are using Auth0 for authentication. You can sign up for an account at www.auth0.com

<!-- TOC ignore:true -->
# Table of Contents

<!-- TOC -->

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Scaffolding](#scaffolding)
- [Debugging](#debugging)
- [Swagger](#swagger)
- [Authentication Setup](#authentication-setup)
    - [Authentication Configuration](#authentication-configuration)
    - [How to Make an Authenticated Call to the API](#how-to-make-an-authenticated-call-to-the-api)
        - [Trouble Shooting](#trouble-shooting)
- [Feathers Help](#feathers-help)

<!-- /TOC -->
# Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```bash
    cd path/to/vice-react-query-feathers-boilerplate-api
    yarn install
    ```

3. Start your app

    ```bash
    yarn start
    ```

    or

    ```bash
    yarn run dev 
    ```

    > **Note:** To make API calls please make sure you've [configured your authentication](#authentication-configuration) and understand [how to make authenticated calls](#how-to-make-an-authenticated-call-to-the-API).

# Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

# Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```bash
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

# Debugging
To see verbose debug logs execute the following command in your terminal before starting the application from the same terminal.

```bash
export DEBUG=@feathers*
```

> **Note:** this will create an environment variable that will only be available during the current terminal session. We you close the terminal the variable will go away and you will need to run the command again.

After you have the `DEBUG` env var configured as described above you should see verbose output similar to what is shown below if you did it correctly.

![](README.md-images/2021-01-24-13-58-12.png)

# Swagger
You can see a swagger page of the available endpoints here: http://localhost:3030/docs/

> **Note:** we are using the [feathers-swagger](https://github.com/feathersjs-ecosystem/feathers-swagger) middleware. 

# Authentication Setup
We are using Auth0 for Authentication. 

## Authentication Configuration
The settings are stored in the `api/config/default.json` file. You can see how this configuration maps to your Auth0 settings [here](https://docs.feathersjs.com/cookbook/authentication/auth0.html#auth0).

To configure Auth0 on your project do the following:
1. Create and/or log into your Auth0 account at www.auth0.com
2. Create an API
3. Create a "machine to machine" application that is has access to your API
4. Enable a grant of type `Authorization Code` as shown below
   ![](README.md-images/2021-01-24-13-34-26.png)
5. Add the following additional configurations to your application in Auth0
   ![](README.md-images/2021-01-24-13-40-19.png)

> **Note:** Strategy Setup
>
>Note that this is already added to the boilerplate but wanted to make sure that it's called out in the docuemntation. We followed the steps [here](https://docs.feathersjs.com/cookbook/authentication/auth0.html#strategy) for adding an Auth0 strategy to the `api/src/authentication.ts` file.

## How to Make an Authenticated Call to the API
Follow the steps below to make an authenticated call to the API.

> **Note:** we are assuming here that you are able to run the application and it can access a Postgres database by the connection string that is specified in the `api/config/default.json` file under the `postgres` setting. The easiest way to do this is to run the `docker-compose -f docker-compose-dev.yml up` command in the root directory of this repository as decribed in the [main readme file](../readme.md##running-a-dev-docker-setup).

1. Navigate to http://localhost:3030/oauth/auth0
   > **Note**: you should have been redirected to the Auth0 lock screen as shown below. 
   >![](README.md-images/2021-01-24-13-43-34.png)
   > The url should be something like https://vice-react-query-feathers-boilerplate.us.auth0.com/u/login?state=g6Fo2SB2dXdGcXB1THlvcDY0Qy1ZSU9hWEdDWWFMSkFjNVZmUKN0aWTZIEMxbHdQVmxkQUZJeklMZ1BRN0hWdTJyVVZlX2ZMRUxoo2NpZNkgbGJPbktoNDB5NHNCc2RhUkZ3TjU4MDV1bDU0TTA1Wlg 
1. Create a new account.
   ![](README.md-images/2021-01-24-13-44-24.png)

   ![](README.md-images/2021-01-24-13-45-15.png)
1. Authorize this boilerpalte access to this newly created account
   ![](README.md-images/2021-01-24-13-46-32.png)
1. You should now see the feathers app with an access token in the URL as shown below:
   ![](README.md-images/2021-01-24-14-20-22.png)
1. Now you should be able to take the access token and call the `/users` endpoint and see all the users in the system including the one you just created. To do this pass the access token as in the headers as the `Authorization` header using a `bearer` token as shown below:

   ```bash
   curl --location --request GET 'http://localhost:3030/users' \
   --header 'Authorization: Bearer PASTE-ACCESS-TOKEN-HERE'
   ```

If all goes well you should see something like the below output in your terminal.

```json
{
  "total": 1,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "id": 1,
      "email": "test2@test.com",
      "auth0Id": "auth0|600dce5668bf180069ed25f6",
      "createdAt": "2021-01-24T20:17:09.026Z",
      "updatedAt": "2021-01-24T20:17:09.026Z"
    }
  ]
}
```

> **Note:** I piped the terminal ouput to [jq](https://stedolan.github.io/jq/) for pretty formatting using a command like 
> ```bash 
> curl 'configurations like above' | jq
> ````
>

### Trouble Shooting
You can look at the Auth0 logs in the `Logs` section as shown below.

![](README.md-images/2021-01-24-13-51-02.png)

You can also enable debugging in feathers as described in our [debbuging](#debugging) section.

# Feathers Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com). 
