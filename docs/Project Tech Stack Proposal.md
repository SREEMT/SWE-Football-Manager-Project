
| Tech       | Type                 | Usage                                                         |
| ---------- | -------------------- | ------------------------------------------------------------- |
| Ruby       | Language             | Backend                                                       |
| Rails      | Framework            | Web App Framework                                             |
| Docker     | Containerizer        | Containerize app for consistency                              |
| Expo       | Mobile App Framework | Mobile App development                                        |
| Redis      | RAM Based Database   | Quick database retrieval and update, great for real time data |
| React      | UI Framework         | For UI design and Implementation                              |
| MongoDB    | Schema-Based DB      | Long term data storage, no need for speed                     |
| PostgreSQL | Relational DB        | Alternative option for MongoDB                                |
### Design Choices Notes
``THIS IS SUBJECT TO CHANGE``

Currently, Ruby on Rails is our current choice and I have laid out some resources to get started. I recommend going through the Odin Project track but focus on the Ruby course and the Rails course. You can speed through it since you don't have to read everything since it covers some CS topics we already know.

When it comes to our database, our current choice is MongoDB but PostgreSQL is also a solid option due to it being a relational database. For our project, a relational database might be a more efficient option for "long term" storage. It is easy to pick up and is easy to understand to an extent.

We are also required to implement real time chat and score feed. I propose the usage of Redis as it utilizes RAM meaning that it is an "in-memory" key-value database making it quick. It is not great for long term storage due to it being volatile in memory so its great for login instances and real time data streams. This would make the website feel quick in certain ways depending on its implementation.

I also propose the usage of a pub/sub design for data streaming for the chat and live score. Redis supports this and is design for these kind of problems. Users can "publish" a chat and then anyone "subscribed" to the match (on match webpage) will see the chat pop up. The published chat will be sent to the Redis server where it will distribute it to the subscribers.

I havent added this, but I propose using Azure for hosting since each of us are given $100 worth of credist as students. It can be used to host web apps. This might not be necessary but would be cool for the final presentation and experience. This is not important.

# Resources:

### [Odin Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails)
Roadmap to get started on Ruby on Rails.
Structured way to learn and includes a ton of resources outside this document.

### Ruby
- [Ruby Documentation](https://docs.ruby-lang.org/en/3.2/index.html)

### Rails
- [Rails Official Site](https://rubyonrails.org/)
- [Rails Guides](https://guides.rubyonrails.org/)

### Docker
- [Docker Official Website](https://www.docker.com/)

### Expo
- [Expo Official Website](https://expo.dev/)

### Redis
- [Redis Official Website](https://redis.io/)
- [Redis Docs](https://redis.io/docs/latest/)
- [Redis Quick-Start](https://redis.io/docs/latest/get-started/)
- [Rails Getting Started (Condensed Guide)](https://guides.rubyonrails.org/getting_started.html)
- [Redis Pub/Sub Guide (Video)](https://www.youtube.com/watch?v=KIFA_fFzSbo)

### React
- [React Official Documentation](https://react.dev/)
- [React Quick-Start](https://react.dev/learn)

### MongoDB
- [MongoDB Official Website](https://www.mongodb.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [MongoDB with Redis (Forum)](https://stackoverflow.com/questions/10696463/mongodb-with-redis)
- *9-25-2025 Class Video*

### PostgreSQL
- [PostgreSQL Official Website](https://www.postgresql.org/)

### Other
- [TailwindCSS (for UI)](https://tailwindcss.com/plus)
- [Chat Design Choice Guide (Video)](https://www.youtube.com/watch?v=1LIyqHsum2g)
- [Figma (Design Platform)](https://www.figma.com/)
