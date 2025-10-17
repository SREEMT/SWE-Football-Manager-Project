
| Tech    | Type                 | Usage                                                         |
| ------- | -------------------- | ------------------------------------------------------------- |
| Ruby    | Language             | Backend                                                       |
| Rails   | Framework            | Web App Framework                                             |
| Docker  | Containerizer        | Containerize app for consistency                              |
| Expo    | Mobile App Framework | Mobile App development                                        |
| Redis   | RAM Based Database   | Quick database retrieval and update, great for real time data |
| React   | UI Framework         | For UI design and Implementation                              |
| MongoDB | Schema-Based DB      | Long term data storage, no need for speed                     |

---

### Pre-Setup...

Before following this setup guide, please update your WSL Ubuntu machine with these steps.
1. Update Package Repo: ```sudo apt update```
2. Upgrade Installed Packages:```sudo apt upgrade -y```
3. Full System Upgrade (If necessary):```sudo apt full-upgrade -y```
4. Update Snap Packages:```sudo snap refresh```
5. Reboot System:```sudo reboot```

---

### Ruby Setup

This project will utilize Ruby 3.4.5 and can be downloaded by running:
```sudo apt-get install ruby-full```
```ruby -v```
```ruby 3.4.5 (2025-07-16 revision 20cda200d3) +PRISM [x86_64-linux]```

If it shows the wrong version, updating the repository with the correct package will be needed. This can be done with curl.
Ruby comes with RSpec but this project will be utilizing another testing software for Rails.

---

### Rails Setup

This project will utilize Rails 8.0.2 and can be downloaded by running:
```gem install rails```
```rails --version```
```Rails 8.0.2```

Rails is the framework being used for this project and uses an MVC structure. 
We will be using [simplecov](https://github.com/simplecov-ruby/simplecov?tab=readme-ov-file)for Rails code coverage testing which utilizes the built in coverage library to generate a clean, readable coverage report for testing. Instructions for download is inside the linked GitHub repository.
Rails also has the ability to setup the project for MongoDB with one command, this is covered under "MongoDB Setup."

For more info regarding testing on Rails: [Testing Rails Applications](https://guides.rubyonrails.org/testing.html)

IMPORTANT:
I strongly recommend each member to follow this Rails guide after installing everything listed in this document. Creating a new repository to do this is necessary.
[Getting Started with Rails]([Getting Started with Rails — Ruby on Rails Guides](https://guides.rubyonrails.org/getting_started.html))
This guide will have you setup a store webapp and familiarize you with the MVC structure in rails and what each folder/file does. This can be done in a day but will greatly improve knowledge with Rails.

---

### Redis Setup

This project will utilize a Redis server to handle live info and user sessions. It will be created as a pub/sub system to handle this.
To download Redis run this:
```
sudo apt update
sudo apt install redis-tools
sudo snap install redis
redis-server -v
Redis server v=7.0.15...
```
If the version does not show up, it might require you to run it and stop it.
To manage this server use these commands:
```
sudo snap start redis         # starts server
sudo snap stop redis          # stops server
sudo snap restart redis       # restarts server
sudo snap services redis      # checks services
```
You can also get into the server by running:
```redis-cli```
and then, ```ping``` to test the connection.
running ```INFO server``` will give you all the server info including the Redis version.

Further Reading: [Install Redis on Linux - Official Redis Site]([Install Redis on Linux | Docs](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-linux/))

---

### MongoDB Setup

MongoDB will be downloaded through ruby:
```gem install mongodb```
This is because MongoDB will be using ruby instead of JavaScript to generate the models required for this project.

You can create a Rails project setup for MongoDB through this command:
DO NOT DO THIS ON THE MAIN REPOSITORY!!!
```rails new <rails app name> -d mongodb```
Rails uses a ```mongoid.yml``` file to configure the database.

Generating models can be done through:
Example:
```rails generate model User name:string email:string```

Other than that, it is just like any MongoDB database. More info regarding Rails w/ Rails will be listed here:
[Ruby on Rails - Mongoid]([Quick Start - Ruby on Rails - Mongoid - MongoDB Docs](https://www.mongodb.com/docs/mongoid/current/quick-start-rails/?msockid=0d4b825c1f57626029f194231eb663a4))

---

### React Setup

This was already done but we will use Vite with react and npm.
Versions:
```
npm -v
10.8.2
node -v
v20.19.5
```
Then you need to run ```npm install``` in the frontend folder to install all dependencies.

---

### Final Notes

This project will be deployed by using Docker containers for the Rails API, Redis Server, and MongoDB server. All of them will work together but this document is for devlopment and testing purposes.
