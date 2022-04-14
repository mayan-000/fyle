App Link: https://fyle-assignment-mayan-000.netlify.app

## How to run locally

1. Git clone the repository. 
2. Go to cloned folder and open terminal in the folder.
3. Run npm start and server will fire up at port 3000.

## Tech Used
1. React with Typescript.
2. MaterialUI for some reusable Components and Bootstrap5 for css.
3. Github API.

## Somethings to look out for
1. There is rate limit to Github API, so at times app will not show any data or remain blank, if that happens, I have put data as static in src->services->API.ts file, please uncomment and you'll get the data for every element or try changing IP address.
2. Since API response is fast, please try throttling to decrease the speed and see the loading spinners.
