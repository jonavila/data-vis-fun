# Data Vis Fun

A Video Game Sales Analysis app using data obtained from [Kaggle's Video Games Sales Dataset](https://www.kaggle.com/sidtwr/videogames-sales-dataset).

## Table of Contents

- [Running the App](#-running-the-app)
- [Building the App](#-building-the-app)
- [Using the App](#-using-the-app)
- [Architecture](#-architecture)
- [Production Readiness Checklist](#-production-readiness-checklist)

## 🚀 Running the App

The app is deployed on Vercel and can be accessed [here](https://data-vis-fun.vercel.app/).

You can also get the app up and running on your local dev environment by following these steps:

1. **Install the app dependencies.**

With Yarn
   ```shell   
   yarn install
   ```

With NPM
   ```shell   
   npm install
   ```
2. **Start the app in `dev` mode.**

With Yarn
   ```shell
   yarn run dev
   ```
With NPM
   ```shell
   npm run dev
   ```

3. **Open the files in the `src` directory and start editing!**
The app is now running at `http://localhost:3000`. Save your changes and the browser will update in real time.

## 👷 Building the App

The app can be built by following these steps:

1. **Install the app dependencies.**

With Yarn
   ```shell   
   yarn install
   ```

With NPM
   ```shell   
   npm install
   ```

2. Run the build command to generate the app's assets

With Yarn
   ```shell
   yarn run build
   ```
With NPM
   ```shell
   npm run build
   ```

3. Inspect the `dist` directory to view the generated output files
   * `assets` directory
   * index.html

4. (Optional) - Serve the app in a local web server

With Yarn
   ```shell
   yarn run preview
   ```
With NPM
   ```shell
   npm run preview
   ```

## 👨‍💻 Using the app

The app's `home` page is the default route and will be seen when launching the app.
This page includes some basic information about the dataset used. 
The app is fully responsive, so feel free to resize the window as much as you want.

You can navigate to a pre-defined dashboard by clicking the Navbar `Dashboard` link or clicking the `Explore data` button. 
Alternatively, you can navigate to the `Details` page which is a placeholder of a future table visualization. A link to the app's source code has also been provided via the `Source code` button.

Navigating to the `Dashboard` page will present you with different aggregate slices of the dataset.
1. Top 10 Platforms by Vide Game Count
2. Total Units Sold by Year of Release
3. Top 5 Video Game Ratings by Total Units Sold
4. Top 5 Genres by Total Units Sold

At the top right of each chart, you'll find a `gear` icon that you can click to bring up the query menu.
Use the available inputs to modify the query and see the chart redraw automatically with the new dataset. 
The title of chart will also update accordingly.

As a bonus, the app provides a Theme toggle button on the Navbar to switch between `dark` and `light` themes. 
By default, the app will detect the user preferred color scheme.

## 🛠 Architecture

1. [Vite](https://vitejs.dev/): Used to provide a fast dev experience and highly optimized build output
2. [Vitest](https://vitest.dev/): A fas unit-test framework for Vite
3. [Mantine](https://mantine.dev/): React component library
4. [ECharts](https://echarts.apache.org/en/index.html): Open Source JavaScript Visualization Library
5. [Arquero](https://uwdata.github.io/arquero/): JavaScript library for query processing and transformation
6. [React Router](https://reactrouter.com/): Client-side router for React

Given the time constraints to build the app, I decided to use tools that I was familiar with, would provide a rich development experience, and also produce a good UX.
Typescript support was also a major consideration for the tools selected. The code should be fully type-safe.

#### Charting
For the charting, I was already very comfortable with ECharts, and it was an easy choice to make. 
ECharts does not provide its own React bindings, but I was able to create a wrapper component using hooks.

#### UI Components
Mantine is a fully featured React component library written in Typescript. Its API is extensive and allowed me to quickly put together a responsive app that supports both `dark` and `light` themes.

#### Data Processing
Without a backend server, all the data processing is happening on the browser. 
I elected to use download the Kaggle dataset in CSV format and pre-converted to JSON for ease of use in the app. 
Arquero was used to load the data and have the ability to run database like queries on top of it.
A custom React hook `useDataQuery` was created to make it easy for the `Chart` component to update the query.
Currently, only single group by queries are supported. Order by metric in ascending or descending order and limits are also supported.

#### Client-side Router
I find it useful to be able to go directly to specific areas of the app and React Router allows you to easily add client-side routing to any React app.

## ✅ Production Readiness Checklist
Given the time constraints, some areas of the app require additional attention to get them production ready.
- [ ] Store the user's dashboard query preference in local storage as a `Favorites` mechanism.
- [ ] Add ability to click on a chart's item to drill to the detail data in tabular form.
- [ ] Add more unit tests. Only 1 test file was included. `App.test.tsx` as a sample.
- [ ] Create a table view with filtering and sorting for users to view detailed data. The app included a Details tab in the header with a placeholder page.
- [ ] Decrease bundle size. Some time should be spent optimize the build output.
- [ ] Don't store the entire JSON data on the client-side. 
Store the data on a server and create the appropriate query APIs to consume data.
- [ ] Profile the app with React Dev Tools to find components that may benefit from memoization.
- [ ] Add additional state management to the app. Would facilitate `undo` scenarios for queries.
