## Dependencies Setup


### Install NVM (Node Version Manager)

For Linux,

bash ```
sudo apt update
```

bash ```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Make sure to close the terminal and reopen

### Install Node

Currently for this project we are using Node version v16.20.2

bash```
nvm install 16.20.2
```

Once you install a version of Node, the corresponding version of NPM is installed for you. So you don’t need to install NPM separately.

To check the version of Node and npm

bash```
node -v
npm -v
```

We can install multiple versions of Node to use a partcular version(say 16) we use 

bash```
nvm use 16
```



### Install Angular CLI

For this project we use Angular CLI version
To install a particular version of Angular CLI we use 
bash```
npm i -g @angular/cli@16.2.11
```



## Project Setup



### Create a new angular application


bash```
ng new <application_name>```

### Create a new component

bash```ng generate component <component_name>```




