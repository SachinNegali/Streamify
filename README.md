This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and using [Shadcn](https://ui.shadcn.com/) as UI library

please find a Hosted app [here](https://streamify-git-main-sachinnegalis-projects.vercel.app/)

## Getting Started

First, Install dependencies and run the development server:

```bash
npm install
```

```bash
npm start
```

this should run json-server at [http://localhost:8082](http://localhost:8082) and frontend at [http://localhost:3000](http://localhost:3000)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thoughts and Trade-Offs

- Using Shadcn cause of Pre existing component library for most parts.
- Using search based filters on tables since feilds we needed filters on are just texts, I think searching is better than selecting through list to filter in this case. but this takes off ability to filter multiple keywords
