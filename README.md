# 📝 NoteKeeper

NoteKeeper is a simple React Native app that demonstrates **global state management using [Zustand](https://github.com/pmndrs/zustand)**. It provides a clean and minimal example of how to use Zustand to manage shared state across multiple screens in a mobile application.
## 📌 Project Overview

This project showcases:

- ✅ Global state management using Zustand
- ✅ Create and delete notes functionality
- ✅ Conditional UI rendering based on app state
- ✅ Navigation flow with stack reset to control back navigation

## ✨ Features

- 📄 Create notes with title and description
- ❌ Long press or tap to mark a note for deletion
- 🗑 Delete multiple notes at once using the delete mode
- 🔄 Zustand used to manage global states like:
  - List of notes
  - Notes marked for deletion
  - Delete mode toggle (`allowDeleteNote`)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src** directory.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Screenshots

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
