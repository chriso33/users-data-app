# Users List Page in Next.js

## Project Overview

### Objective:
The goal of this project was to create a simple users list page using **Next.js**, where the list of users would be fetched from an API endpoint, displayed on the page, and show more details when clicking on a specific user. This project utilized **Server-Side Rendering (SSR)** with Next.js for fetching user data on the server before rendering the page.

---

## What I Did

1. **Set up the Next.js Project:**
   I created a basic Next.js project using `create-next-app` and set up TypeScript for type safety. This included creating the necessary folder structure for pages and API routes, as well as adding CSS styling for the UI.

2. **API Route:**
   I created an API route `/api/users` that simulates fetching user data. The mock data included basic user information like `id`, `name`, and `email`. Additionally, I extended the mock data to include a `friends` field, which is an array of user IDs representing friendships. This mock data was used to simulate fetching data from a database.

3. **Users List Page (SSR):**
   - I created a **`UsersList`** page that used the `getServerSideProps` function to fetch the user data from the API on the server-side before rendering the page.
   - The list of users was rendered using `map` inside a `<ul>` element, with each user’s name and email displayed as a list item (`<li>`). Each user name was clickable and linked to a dynamic user details page.

4. **User Details Page:**
   I created a **User Details page** (`/users/[id].tsx`) using Next.js dynamic routing. Each user had their own details page, where the `id` in the URL was used to fetch specific user data and display additional information (like `name`, `email`, and `id`). The data was fetched using `getServerSideProps` based on the dynamic `id` from the URL.

5. **Styling:**
   I used simple CSS modules for styling the pages, including centering the list and adding basic styles like padding, margins, and font styles to improve the UI. A CSS module was created for both the **User List** and **User Details** pages for better separation of concerns.

6. **Linking Between Pages:**
   I used Next.js `Link` component to navigate between the **Users List** page and individual user details pages. The links were dynamically created by using the user `id` to construct the URL for each user’s details page.

---

## Assumptions Made

1. **Mock Data:**
   I assumed the user data would be static for this project, so I used a mock array of users for both the API and details pages. This was a simple and fast way to simulate real data before working with an actual database or external API.
   
2. **No Authentication:**
   I assumed that there were no authentication or authorization requirements for accessing the user data. This simplified the project by not needing to handle any user access control or security.

3. **Basic CSS Styling:**
   I kept the CSS simple and assumed the styling would be basic for the purposes of the demo. If this were a production app, further enhancements to the UI/UX would be necessary.

---

## What I Planned to Do

- **Develop User List Page:** I planned to fetch the list of users via an API and display them in a list format on the users’ page.
- **Create User Details Pages:** I planned to create a dynamic route for individual users (`/users/[id]`), where I would fetch specific user details based on the `id` from the URL.
- **Improve User Experience:** I intended to ensure good UX by making the user list clickable and showing relevant user information when a user is selected.

---

## Challenges Encountered

1. **API Fetching with SSR:**
   Initially, there were some issues with the API fetching in the `getServerSideProps` function. Specifically, I had to ensure that the API was set up correctly in Next.js and that data was being fetched from the correct endpoint. The need for SSR was to make sure the data was fetched on the server side, which might be tricky when working with mock data.
   
2. **Dynamic Routing in Next.js:**
   Handling dynamic routes for user details (e.g., `/users/[id]`) required an understanding of Next.js dynamic routing. Initially, I struggled with correctly retrieving the `id` from the URL params and making sure the correct user data was displayed based on that.

3. **Linking Between Pages:**
   The linking between the user list page and the individual user details page was straightforward with Next.js `Link`, but I had to ensure the dynamic routing was correctly set up for the user details pages and links.

4. **Mock Data Limitations:**
   Since the user data was mocked, it was challenging to simulate more complex scenarios, like pagination or filtering, which would be necessary for a real-world app.

---

## Future Improvements

1. **Real API Integration:** 
   Replace the mock data with an actual API call or database query, allowing for dynamic user data retrieval from a backend service.
   
2. **User Authentication:** 
   Implement user authentication to protect sensitive data, allowing only logged-in users to access certain parts of the application.
   
3. **Styling and UI Enhancements:** 
   Further enhance the CSS and UI components with modern front-end frameworks (e.g., Material UI, Tailwind CSS) to improve the overall design and responsiveness.
   
4. **Error Handling:**
   Implement better error handling (e.g., displaying a loading state, showing error messages when the data fetch fails).

---

## Conclusion

This project was a simple implementation of a **users list page** with Next.js, which utilized **Server-Side Rendering** to fetch user data from a mock API. It demonstrated how to set up dynamic routes in Next.js for individual user pages, handle API calls, and apply basic styling. Future improvements could focus on using real API data, enhancing the UI/UX, and adding features like authentication and pagination for a more production-ready application.

---
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
