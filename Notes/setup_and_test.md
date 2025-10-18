# 🧰 Rails + React (Vite) + MongoDB + Redis – Local Setup & Testing Guide

This guide explains how to start the full stack locally for development/testing, and how to run Rails tests with **SimpleCov** for code coverage.

---

## Prerequisites

Make sure you have the following installed:

- **Ruby** 
- **Rails** 
- **Node.js** + **Yarn** or **npm**
- **Vite** (installed via `vite_rails` or `vite-plugin-ruby`)
- **MongoDB** 
- **Redis** 
- **Bundler**

---

## 1. Start MongoDB

Check MongoDB status:
```bash
sudo systemctl status mongod
```

If it’s not running, start it:
```bash
sudo systemctl start mongod
```

Test connection:
```bash
mongosh
```
You should see the MongoDB shell prompt (`>`) — then exit with `exit`.

---

## 2. Start Redis

Check Redis:
```bash
redis-cli ping
```
If it responds with `PONG`, it’s running.

Otherwise start it:
```bash
sudo systemctl start redis
```
or (depending on your OS):
Use this
```bash
redis-server
```

---

## 3. Install Ruby and Node dependencies

From the backend directory:
```bash
bundle install
yarn install
```

Do this on the frontend directory:
```bash
npm install
```

---

## 4. Start the servers (development environment)

Open **three terminals**:

### Terminal 1 – Rails API / Backend
```bash
bin/rails server
```
or
```bash
rails s
```

### Terminal 2 – React Frontend (Vite)
```bash
bin/vite dev
```
or
```bash
yarn vite
```

### Terminal 3 – Background jobs / Sidekiq (if used)
If your app uses Sidekiq:
```bash
bundle exec sidekiq
```

Otherwise, skip this step.

Once all three are running, visit:
👉 **http://localhost:3000**

---

## 5. Run Rails Tests with SimpleCov

SimpleCov automatically collects test coverage when required early in your test suite.

Make sure this line is **at the very top** of your `test/test_helper.rb` or `spec/spec_helper.rb`:

```ruby
require 'simplecov'
SimpleCov.start 'rails'
```

Then run your tests:

### Using Minitest
```bash
rails test
```

### Using RSpec
```bash
bundle exec rspec
```

After tests complete, open the coverage report:
```bash
open coverage/index.html
```

You’ll see an HTML dashboard showing which files are covered.

---

## 6. Optional Cleanup Commands

Stop servers:
```bash
sudo systemctl stop mongod
sudo systemctl stop redis
```
or
```
redis-cli shutdown
```
redis-cli will allow you to run commands on redis

Remove temporary files and logs:
```bash
rails tmp:clear log:clear
```

Reset the database (if needed):
```bash
rails db:drop db:create db:migrate
```

---

## Quick Summary

| Service | Command to Start | Notes |
|----------|------------------|-------|
| MongoDB | `sudo systemctl start mongod` | Database |
| Redis | `sudo systemctl start redis` or `redis-server start`| Cache / Sidekiq |
| Rails | `rails s` | Backend API |
| Vite | `npm run dev` | React Frontend |
| Tests (Minitest) | `rails test` | Coverage via SimpleCov |
| Tests (RSpec) | `bundle exec rspec` | Coverage via SimpleCov |

---

Final Note:

Run `rails console` to run commands and test server connection from the Rails API.

`REDIS.ping` will return `PONG` if the connection is there.

`Mongoid.default_client.database_names.present?` will return `true` if MongoDB connection is valid.

