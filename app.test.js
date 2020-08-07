const app = require("./app");
const request = require("supertest");
const knex = require("./db/connection");

beforeEach(() => {
  return knex.seed.run();
});
afterAll(() => {
  return knex.destroy();
});

describe("app", () => {
  describe("/api", () => {
    describe("/topics", () => {
      test("GET: 200 - responds with array of topics", () => {
        return request(app)
          .get("/api/topics")
          .expect(200)
          .then(({ body }) => {
            body.topics.forEach((topic) => {
              expect(topic).toHaveProperty("description");
              expect(topic).toHaveProperty("slug");
            });
          });
      });
    });
    describe("/users", () => {
      test("GET: 200 /api/users/:username - return user by username", () => {
        return request(app)
          .get("/api/users/butter_bridge")
          .expect(200)
          .then(({ body }) => {
            body.user.forEach((user) => {
              expect(user).toHaveProperty("username");
              expect(user).toHaveProperty("avatar_url");
              expect(user).toHaveProperty("name");
            });
          });
      });
      test("GET: 404 /api/users/:username -responds with error when given a valid but non-existant username", () => {
        return request(app)
          .get("/api/users/usernameeee")
          .expect(404)
          .then(({ body }) => {
            expect(body.msg).toBe("User does not exist!");
          });
      });
    });
    describe("/articles", () => {
      test("GET: 200 /api/articles/:article_id - responds with an object of article objects", () => {
        return request(app)
          .get("/api/articles/1")
          .expect(200)
          .then(({ body: { article } }) => {
            expect(article).toHaveProperty("author");
            expect(article).toHaveProperty("title");
            expect(article).toHaveProperty("article_id");
            expect(article).toHaveProperty("topic");
            expect(article).toHaveProperty("created_at");
            expect(article).toHaveProperty("votes");
            expect(article).toHaveProperty("comment_count");
          });
      });
      // test('GET: 400 /api/articles/:article_id - error when article_id is an invalid data type', () => {
      //   return request(app)
      //     .get("/api/articles/ARTICLE")
      //     .expect(400)
      //     .then((body) => {
      //       console.log(body)
      //       expect(body.msg).toBe("Invalid request");
      //     });
      
      // });
      test('PATCH: 200 /api/articles/:article_id - responds with updated article', () => {
        const newVote = `{ inc_votes : 1 }`
        return request(app)
          .patch('/api/articles/1')
          .send(newVote)
          .expect(200)
          .then(({ body }) => {
            expect(body).toEqual(newArticle)
          })
      });
    });
  });
});
