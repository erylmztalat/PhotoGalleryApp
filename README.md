# Features

- **Photo Grid:** Presents a grid of photo thumbnails.

- **Photo Modal:** Upon selecting a photo from the grid, a modal opens to present a full-size image of the photo along with the title.

- **Comments Functionality:** Within the photo modal, users can add comments to a photo, edit existing comments, and delete comments.

- **API Mocking:** Utilizes mock API data for photos.

- **State Management:** Uses React Query for efficient state management of photos and Async Storage for persisting comments across sessions.

# Getting Started

- **Clone the repository:** Use

```bash
git clone https://github.com/erylmztalat/PhotoGalleryApp.git
```

to clone the repository to your local machine.

- **Install Node.js:** If not already installed, download and install Node.js.

- **Install the dependencies:** Navigate to the project directory in your terminal and run npm install to download and install the necessary NPM packages.

- **Run the application:** Use the npm start command to run the application.

# Testing

Tests are written using Jest and React Testing Library. To run the tests, use the npm test command. Mocking is used to isolate the components for unit testing.

# Libraries Used

- **React Native:** Used for building the mobile application interface.

- **React Query:** Used for data fetching, caching, and state management related to the photos.

- **Async Storage:** Used for storing and managing comments data locally.

- **Jest:** The testing framework used to write unit tests.

- **React Testing Library:** Used in conjunction with Jest to write tests simulating user behavior.
