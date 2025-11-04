export const portfolioSwaggerDocs = {
  // API to create a new portfolio
  "/api/portfolio/create": {
    post: {
      tags: ["portfolio"],
      summary: "portfolio create",
      description: "This is auto generated portfolio create API",
      requestBody: { required: true, content: { "application/json": { schema: { type: "object", required: ["name"], properties: { name: { type: "string", example: "John Doe" } } } } } },
      responses: { 201: { description: "portfolio created successfully" }, 400: { description: "Validation error" } }
    }
  }
  ,
  // API to get all portfolios
  "/api/portfolio": {
    get: {
      tags: ["portfolio"],
      summary: "Get all portfolios",
      description: "Fetch all portfolio entries from the database.",
      responses: {
        200: {
          description: "List of all portfolios",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string", example: "674f2bda2c8b9b45d1e88888" },
                    title: { type: "string", example: "GreenCircle Web App" },
                    network: { type: "string", example: "Freelancer" },
                    year: { type: "number", example: 2025 },
                    role: { type: "string", example: "Full Stack Developer" },
                    description: { type: "string", example: "Developed a MERN stack gardening platform." },
                    image: { type: "string", example: "https://i.ibb.co/greencircle.jpg" },
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
  },
  // 
  "/api/portfolio/four-portfolios": {
    get: {
      tags: ["portfolio"],
      summary: "Get Only Four portfolios",
      description: "Fetch Only Four portfolios entries from the database.",
      responses: {
        200: {
          description: "List of Only Four portfolios",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string", example: "674f2bda2c8b9b45d1e88888" },
                    title: { type: "string", example: "GreenCircle Web App" },
                    network: { type: "string", example: "Freelancer" },
                    year: { type: "number", example: 2025 },
                    role: { type: "string", example: "Full Stack Developer" },
                    description: { type: "string", example: "Developed a MERN stack gardening platform." },
                    image: { type: "string", example: "https://i.ibb.co/greencircle.jpg" },
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
  },
};