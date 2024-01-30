# Angular from the scratch

## Dependencies Setup


### Install NVM (Node Version Manager)

For Linux,

```bash
sudo apt update
```


```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

For Windows,
[Node Version Manager (NVM) Install Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)



Make sure to close the terminal and reopen

### Install Node

Currently for this project we are using Node version v16.20.2

```bash
nvm install 16.20.2
```

Once you install a version of Node, the corresponding version of NPM is installed for you. So you don’t need to install NPM separately.

To check the version of Node and npm

```bash
node -v
npm -v
```

We can install multiple versions of Node to use a partcular version(say 16) we use 

```bash
nvm use 16
```



### Install Angular CLI

For this project we use Angular CLI version
To install a particular version of Angular CLI we use 
```bash
npm i -g @angular/cli@16.2.11
```



## Project Setup



### Create a new angular application


```bash
ng new APPLICATION_NAME
```

### Create a new component

```bash 
ng generate component COMPONENT_NAME
```


## Project Details

Basic form with Create, Read, Update and Delete (CRUD) operations which is connected to Django backend to handle the API's.



## Setup for this project


### Frontend setup

1.  Clone the repository [Angular GitHub Repository](https://github.com/UtkJaiswal/Angular-Form.git)


2.  Change the directory to the project directory 
    ```bash
    cd angular-form
    ```


3.  Use the correct version of node v16.20.2 using nvm change it if not already
    ```bash
    nvm use 16
    ```




4.  Install the dependencies using the following command
    ```bash
    npm install
    ```

5.  Run the project
    ```bash
    ng serve
    ```

6.  The project is running at [http://localhost:4200](http://localhost:4200)


### Backend setup

1.  Clone the backend repository [Django Github Repository](https://github.com/UtkJaiswal/Django-CRUD-Form)

2.  Change the directory to the project directory 
    ```bash
    cd project
    ```

3.  Create a virtual environment
    For Windows,
    ```bash
    python3 venv venv
    ```

    For Linux,
    ```bash
    virtualenv venv
    ```

4.  Activate the virtual enviroment
    For Windows,
    ```bash
    . venv\scripts\activate
    ```

    For Linux,
    ```bash
    source venv/bin/activate
    ```

5. Install the dependencies
    ```bash
    pip install -r requirements.txt
    ```

6.  Run the project
    ```bash
    python manage.py runserver
    ```

7.  The server is running at [http://localhost:8000](http://localhost:8000)