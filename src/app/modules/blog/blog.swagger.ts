export const blogSwaggerDocs = {
  "/api/blog/create": {
    post: {
      tags: ["blog"],
      summary: "blog create",
      description: "This is auto generated blog create API",
      requestBody: { required: true, content: { "application/json": { schema: { type: "object", required: ["name"], properties: { name: { type: "string", example: "John Doe" } } } } } },
      responses: { 201: { description: "blog created successfully" }, 400: { description: "Validation error" } }
    }
  },
  "/api/blog": {
    get: {
      tags: ["blog"],
      summary: "Get all blogs",
      description: "Fetch all blog entries from the database.",
      responses: {
        200: {
          description: "List of all blogs",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string", example: "674f2bda2c8b9b45d1e88888" },
                    title: { type: "string", example: "Understanding MERN Stack" },
                    category: { type: "string", example: "Web Development" },
                    readTime: { type: "string", example: "8 min read" },
                    excerpt: { type: "string", example: "A quick introduction to the MERN stack..." },
                    content: { type: "string", example: "The MERN stack is a combination of MongoDB, Express.js, React, and Node.js..." },
                    imageUrl: { type: "string", example: "https://i.ibb.co/example/mern-blog.jpg" },
                    createdAt: { type: "string", example: "2025-11-04T10:00:00.000Z" }
                  }
                }
              }
            }
          }
        },
        500: { description: "Internal server error" }
      }
    }
  }
};