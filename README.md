This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instalation

First, you'll need node.js and node package manager "npm" or "yarn" installed : [https://nodejs.org/en/].
Our version of node.js : v14.17.0
Our version of npm : v7.12.1

## Technologies

Our project uses the following technologies :

- The React framework Next.js for both front-end and back-end (React + Node.js running on the same server).
- A postgreSQL database.

## Getting Started

Install all the dependencies by running the following command :

```bash
npm install --save
```

Then create a file named .env.local in the root directory of the project and follow all the instructions localised inside the file '.env.example' also in the root directory. The application won't run without the environnement variables, since the database connection won't be established.

Go to the file /server/database.js and change the following line of code :

On line 18 change false to true like following:

```
const sync = true
```

This line of code creates all the tables in database.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and reload the browser once.

Go back to file /server/database.js and on line 18 switch back to false. You can now reload your browser and your database will be ready !

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/\*](http://localhost:3000/api/*). This endpoint can be edited in `pages/api/*`. \* means any endpoint in the project.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Architecture of the projects

- Client folder : Folder containing all the front-end api calls.
- Components folder : Folder containing React components.
- Pages folder : Folder containing all the React pages and all the API routes. Both API and pages URLs respect the file-system routing.
- Public folder : Folder containing all the public assets and files.
- Server folder : Folder containing all the database Models, the database connection, the email service...
- Styles folder : Folder containing all the styles for components and pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#   a u t h e n t i c a t i o n 
 
 #   a u t h e n t i c a t i o n 
 
 
