# plinky-site

This is the website for [www.plinkysynth.com](https://www.plinkysynth.com). It is deployed on Netlify, and this website is from the default template for setting up a [Sapper](https://github.com/sveltejs/sapper) project. Typescript is (lightly) used.

## Running the project locally

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd plinky-site
npm install # or yarn
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

## Adding new firmware

Adding firmware has its own special step so that the UF2 file will always download as CURRENT.UF2 but also we can keep all files around in a sane manner (in the `firmware/` folder).

1. Add the firmware file in `firmware/`.
2. Edit the `firmware.json` file in the root to point to it.

## Deploying

Deployments are done automatically when you trigger a push to `main` via `sapper export`.

## Credits

Plinky synthesizer by Alex Evans (@mmalex). Website by miunau (@miuott) with content by Plinky contributors.
