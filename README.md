<!-- prettier-ignore-start -->

<!-- Rename all occurences with Cmd + D :

Openshare
openshare
www.openshare.dev
https://www.openshare.dev

 -->


<a href="">
  <img src="./public/og.png" alt="Logo" width="128" >
</a>


# Openshare

Openshare is a website for sharing open source projects with the community.

<!-- [www.openshare.dev](https://www.openshare.dev) -->


<!-- ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here) -->


<!-- ## About the project

Much longer description of the project -->


## Features

- Light / Dark Themes
- Credentials and Github authentication


## Roadmap

- [ ] Model the structure of the database
- [ ] Model the structure of routing
- [ ] Signup and Signin pages
- [ ] Home page (with all projects)
- [ ] Project page
- [ ] Profile page

<!-- - [x] ~Add OG image for blog using @vercel/og~ -->



<!-- ## Known Issues

- Live previews
- Fullscreen mode
- ~Cross platform~
- ~Light/dark mode toggle~ -->



<!-- ## Note on something  

> **info**  
> This project is using Next.js 13.2

> **warning**  
> This project is using Next.js 13.2 -->


## Tech Stack

#### Client:
- Typescript
- React
- Next.js
- Scss modules

#### Server:
- Next.js

#### Tests:
- Vitest

#### Database:
- MariaDB (SQL)


## Run locally

1. Clone the project:

```bash
  git clone https://github.com/bastien-pruvost/openshare.git
```

2. Go to the project directory:

```bash
  cd openshare
```

3. Copy `.env.example` to `.env.local` and update environment variables

```bash
  cp .env.example .env.local
```

4. Install dependencies:

```bash
  pnpm install
  # or
  yarn install
  # or
  npm install
```

5. Run the development server:

```bash
  pnpm dev
  # or
  yarn dev
  # or
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API Routes can be accessed on [http://localhost:3000/api](http://localhost:3000/api)


## Running tests

To run tests, run the following command:

```bash
  pnpm test
  # or
  yarn test
  # or
  npm run test
```


## Build project

To build the project for production usage, run the following command:

```bash
  pnpm build
  # or
  yarn build
  # or
  npm run build
```

It will create a `.next` folder in root folder with all static files.


## Start project in production

To start the app in production, make sure you have built the project with the build command from the previous section, then run the following command:

```bash
  pnpm start
  # or
  yarn start
  # or
  npm start
```


## Routing

This project use [Next.js 13 App Router](https://beta.nextjs.org/docs/routing/fundamentals) built on top of React Server Components.

[Client Routes](https://beta.nextjs.org/docs/routing/defining-routes) are located in the folder `src/app`.

[API Routes](https://beta.nextjs.org/docs/routing/route-handlers) are located in the folder `src/app/api`.

All files named `router.ts` in the API directory are treated as [API routes](https://beta.nextjs.org/docs/routing/route-handlers) instead of React pages.


## Report bug / Support

To report a bug or get help [open an issue](https://github.com/bastien-pruvost/openshare/issues).


## Suggestions

If you have any suggestion, feel free to [open an issue](https://github.com/bastien-pruvost/openshare/issues) with the tag "enhancement"


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and open a pull request.

1. [Fork the project](https://github.com/bastien-pruvost/openshare/fork)
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Code your feature
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/my-feature`)
6. [Open a pull request](https://github.com/bastien-pruvost/openshare/compare)

You can also simply [open an issue](https://github.com/bastien-pruvost/openshare/issues) with the tag "enhancement".

Don't forget to give the project a star! Thanks again!


## License

Distributed under the [MIT License](https://choosealicense.com/licenses/mit/).

See `LICENSE` file for more information.



<!-- prettier-ignore-end -->
