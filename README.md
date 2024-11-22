# HACKA with Elysia

Hacka is the application for hackathon finder 

![image](https://github.com/user-attachments/assets/402ad3d7-f5fa-4654-af98-3885c746f724)



```bash
bun create elysia ./elysia-example
```




## Development
To start the development server run:
```bash
bun run dev
```

Sync the prisma schema with the MySQL

`bunx prisma migrate dev --name init`


Open http://localhost:3000/ with your browser to see the result.


Deploy : 

bun build \
	--compile \
	--minify-whitespace \
	--minify-syntax \
	--target bun \
	--outfile server \
	./src/index.ts

Problems with the deployment :

1. Azure MySQL Database Flexible Servers doesn't work for Free Subscription plan in MLSA account.
2. Prisma need to change to debian-1.x.x to deploy the bun with the docker
3. 


Backlogs for the Swipe Feature :

Swipe Page API Design:
You’ll need two main API endpoints:

GET /profiles-to-swipe:

Purpose: Fetch profiles for the user to swipe on (exclude users they've already swiped).
Input: UserID (e.g., Alice)
Output: List of potential profiles (excluding already-swiped users).
POST /swipe:

Purpose: Record a swipe action (like or dislike).
Input: SwipingUserID, SwipedUserID, SwipeAction (like or dislike)
Output: Success message, and optionally whether it's a match.
