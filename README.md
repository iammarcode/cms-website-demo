# financial_web

> ### Introduction
>
> A fullstack project with JSON Web Token based on vue, node and mongodb.
>
> ### Skill
>
> Vue + Express + Mongoose

## Build Setup

```bash
# Clone project
git clone git@github.com:chowchunlok/financial_management.git

# Install server dependencies
cd server
npm install

# Run server
npm run start

# Install front-end dependencies
npm install

# run front-end
npm run serve

```


## Main function

1. Sign Up

+ JWT: Create token when register, and save it in mongodb. 
+ Upload Avatar: Save avatar's url in mongodb and storage it in server's public folder: *server/public/upload/YYYY-MM-DD/filename*

![register](./static/gif/register.gif)



2. Log in

+ After login succesfully, token is saved in localstorage (it's background management project is saved in cookie：[financial_management](https://github.com/chowchunlok/financial_management))

+ Check client's token every time when user visit their homepage `/src/router.js`
```
router.beforeEach((to, from, next) => {
let token = localStorage.getItem('token')
if (to.meta.requireAuth) {  // Pages need permission
	if (token) {
		next()
	} else {
		next({
			path: '/user/login',
			query: { redirect: to.fullPath }
		})
	}
} else {
	next()
}
})
```

![log in](./static/gif/Login.gif)



1. News

![news](./static/gif/news.gif)



4. Stock Chart

![Stock Chart](./static/gif/chart.gif)



5. Article

- Edit by Rich Text Editor, a background management web project: [financial_management](https://github.com/chowchunlok/financial_management)
  ![Edit Article in background management](./static/gif/edit.gif)

- Rich Text Editor is based on [Tinymce](https://www.tiny.cloud/get-tiny/custom-builds/)

  

6. Some pages and features are not yet completed…

## What is next to do?

SEO

Lang Switch 

React Version

Use ES7(async/await) in Server

......