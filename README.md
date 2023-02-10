# KinoRetro 2023

[See online version.](https://www.valentin.boureaud.com/kinoretro)

## Launch dev mode

```
	git clone https://github.com/VBoureaud/kinoretro2023.git
	cd kinoretro2023
	npm install
	npm run dev
```

## Build

```
	npm install
	npm run build
```

Then change config needed in dist/index.html


## How to build your data set

1. Get the pdf with the list of movies.  
2. Convert pdf to html.  
3. Use the utils/getInfoFromHtml.js in a navigator console.  
4. convert csv file to json and update it in src/App.jsx line 54.  