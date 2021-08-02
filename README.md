## Live Demo and Code

You can also visit the project Live Demo here: [https://nifty-brahmagupta-a236a6.netlify.app/](https://nifty-brahmagupta-a236a6.netlify.app/)
and view code on my [Github](https://github.com/iamtheozzy/can-my-cat-eat-that)

## 🚀 Quick start

This project was created using a gatsby starter template. To view this project please follow steps below.

  ```shell
  # install dependencies
  npm install
  ```


1.  **Production ✨**


    ```shell
    # Run build and start server
    npm run build && npm run serve
    ```

2.  **Development 👷🏾‍♂️**


    ```shell
    npm start
    ```
    The site is now running at http://localhost:8000 


## Improvemments & Comments

This project was really fun to create. The reality is there are endless improvements I would love to make to this project if time allows for it 😅

* Clean up styles to follow bem closer
* More atomic use of css variables
* Remove redundant logic in components. Probably abstract to hooks
* Write unit tests for interactions
* Optimize image performance further
* To show specific plant I decided to route to a single page. In hindsight I think this was a poor decision and didn't result in a great user experience. Hence the creation of the hideous back button in the nav when you're on a plant page. I believe a modal would have created a better UX and maybe even have been less code.
  * However I did spent time creating the automated creation of the pages so i figured it would be worth it to show that work.
* I wasn't very consisten using pixel values or rem values for space or fonts. I would have also liked to take the time to tokenize things like space.
