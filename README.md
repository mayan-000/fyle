App Link: https://fyle-assignment-mayan-000.netlify.app

<h3>How to run locally</h3>
1. Git clone the repository.
2. Go to cloned folder and open terminal in the folder.
3. Run npm start and server will fire up at port 3000.

<h3>Tech Used</h3>
1. React with Typescript.
2. MaterialUI for some reusable Components and Bootstrap5 for css.
3. Github API.


<h3>Somethings to look out for<h3>
1. There is rate limit to Github API, so at times app will not show any data or remain blank, if that happens, I have put data as static in src->services->API.ts file, please uncomment and you'll get the data for every element.
2. Since API response is fast, please try throttling to decrease the speed and see the loading spinners.
