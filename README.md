# nodejs-ORM-Sequelize-Server

<hr>

# Installing CLI
$ npm install --save sequelize-cli

 # Bootstrapping

To create an empty project you will need to execute init command

$ npx sequelize-cli init

This will create following folders

    config, contains config file, which tells CLI how to connect with database
    models, contains all models for your project
    migrations, contains all migration files
    seeders, contains all seed files

# Creating first Model (and Migration)

# Let's create a model named User.

$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string


<div><strong>Running Migrations</strong></div>
<div>npx sequelize-cli db:migrate</div>

<div><strong>Creating First Seed</strong></div>
<div> npx sequelize-cli seed:generate --name demo-user</div>
<div><strong>Running Seeds</strong></div>
<div>npx sequelize-cli db:seed:all</div>

<div align="center"><strong>Start your next react project in seconds</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>
