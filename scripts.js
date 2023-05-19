import { BOOKS_PER_PAGE,books, authors, genres } from "./data.js";
// Importing necessary constants and data from "./data.js" module

// Setting initial values for pagination
let page = 1;
let range = books.length;
// Initializing the current page number and the total number of books

// Defining day and night color schemes
const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};
const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};
// Defining color schemes for day and night modes

//this program impots necessary data, sets up pagination for displaying books, and defines color schemes for different modes to enhance the user's visual experience.





// Creating a document fragment to add books to
const fragment = document.createDocumentFragment();
// Creating an empty document fragment to hold the book previews

// Setting initial indices for the range of books to display
let startIndex = 0;
let endIndex = 36;
// Initializing the start and end indices for the subset of books to display

// Extracting a subset of books to display on the initial page
const extracted = books.slice(startIndex, endIndex);
// Extracting a portion of the books array based on the start and end indices

// Looping through the extracted books and creating a preview element for each
for (let i = 0; i < extracted.length; i++) {
  const preview = document.createElement('dl');
  // Creating a <dl> element to hold the book preview

  preview.className = 'preview';
  preview.dataset.id = books[i].id;
  preview.dataset.title = books[i].title;
  preview.dataset.image = books[i].image;
  preview.dataset.subtitle = `${authors[books[i].author]} (${new Date(books[i].published).getFullYear()})`;
  preview.dataset.description = books[i].description;
  preview.dataset.genre = books[i].genres;
  // Assigning relevant book data to dataset attributes of the preview element

  preview.innerHTML = /*html*/`
    <div>
      <img class='preview__image' src="${books[i].image}" alt="book pic"/>
    </div>
    <div class='preview__info'>
      <dt class='preview__title'>${books[i].title}</dt>
      <dt class='preview__author'>By ${authors[books[i].author]}</dt>
    </div>`;
  // Setting the HTML content of the preview element using template literals

  fragment.appendChild(preview);
  // Appending the preview element to the document fragment
}

//This code creates a document fragment, which is an empty container to hold book previews. It also sets up initial indices to determine which subset of books to display. Then, it extracts a portion of the books based on the start and end indices.
//Next, the code loops through the extracted books and creates a preview element for each book. The preview element is created as a <dl> (description list) element and contains various dataset attributes to store relevant book data. The HTML content of the preview element is set using template literals, including the book's image, title, and author.
//Finally, each preview element is appended to the document fragment. This allows the previews to be added efficiently without directly modifying the actual HTML document.





// Appending the book previews to the page
const booklist1 = document.querySelector('[data-list-items]');
booklist1.appendChild(fragment);
// Selecting the element with the attribute '[data-list-items]' and appending the previously created document fragment 'fragment' to it

// Adding event listeners for the search and settings buttons
const searchbutton = document.querySelector("[data-header-search]");
searchbutton.addEventListener('click', (event) => {
  document.querySelector("[data-search-overlay]").style.display = "block";
});
// Selecting the element with the attribute '[data-header-search]' and adding a 'click' event listener to it. When clicked, it displays the element with the attribute '[data-search-overlay]'

const searchCancel = document.querySelector("[data-search-cancel]");
searchCancel.addEventListener('click', (event) => {
  document.querySelector("[data-search-overlay]").style.display = "none";
});
// Selecting the element with the attribute '[data-search-cancel]' and adding a 'click' event listener to it. When clicked, it hides the element with the attribute '[data-search-overlay]'

const settingbutton = document.querySelector("[data-header-settings]");
settingbutton.addEventListener('click', (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "block";
});
// Selecting the element with the attribute '[data-header-settings]' and adding a 'click' event listener to it. When clicked, it displays the element with the attribute '[data-settings-overlay]'

const settingCancel = document.querySelector('[data-settings-cancel]');
settingCancel.addEventListener('click', (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "none";
});
// Selecting the element with the attribute '[data-settings-cancel]' and adding a 'click' event listener to it. When clicked, it hides the element with the attribute '[data-settings-overlay]'

//This code adds functionality to the user interface. It appends book previews to a specific element on the page. It also adds event listeners to the search and settings buttons, allowing the display of search and settings overlays when clicked, and hiding them when the corresponding cancel buttons are clicked.







// Code to display book details
const detailsToggle = (event) => {
  const overlay1 = document.querySelector('[data-list-active]');
  const title = document.querySelector('[data-list-title]');
  const subtitle = document.querySelector('[data-list-subtitle]');
  const description = document.querySelector('[data-list-description]');
  const image1 = document.querySelector('[data-list-image]');
  const imageblur = document.querySelector('[data-list-blur]');
  
  event.target.dataset.id ? overlay1.style.display = "block" : undefined;
  // If the event target has a 'data-id' attribute, set the display style of 'overlay1' to 'block' (show the book details overlay)
  event.target.dataset.description ? description.innerHTML = event.target.dataset.description : undefined;
  // If the event target has a 'data-description' attribute, set the innerHTML of 'description' to the value of 'event.target.dataset.description' (update the book description in the overlay)
  event.target.dataset.subtitle ? subtitle.innerHTML = event.target.dataset.subtitle : undefined;
  // If the event target has a 'data-subtitle' attribute, set the innerHTML of 'subtitle' to the value of 'event.target.dataset.subtitle' (update the book subtitle in the overlay)
  event.target.dataset.title ? title.innerHTML = event.target.dataset.title : undefined;
  // If the event target has a 'data-title' attribute, set the innerHTML of 'title' to the value of 'event.target.dataset.title' (update the book title in the overlay)
  event.target.dataset.image ? image1.setAttribute('src', event.target.dataset.image) : undefined;
  // If the event target has a 'data-image' attribute, set the 'src' attribute of 'image1' to the value of 'event.target.dataset.image' (update the book image in the overlay)
  event.target.dataset.image ? imageblur.setAttribute('src', event.target.dataset.image) : undefined;
};
// Defining a function 'detailsToggle' that is triggered when an event occurs

const detailsClose = document.querySelector('[data-list-close]');
detailsClose.addEventListener('click', (event) => {
  document.querySelector("[data-list-active]").style.display = "none";
});
// Selecting the element with the attribute '[data-list-close]' and adding a 'click' event listener to it. When clicked, it hides the element with the attribute '[data-list-active]'

const bookclick = document.querySelector('[data-list-items]');
bookclick.addEventListener('click', detailsToggle);
// Selecting the element with the attribute '[data-list-items]' and adding a 'click' event listener to it. When clicked, it invokes the 'detailsToggle' function.

const authorSelect = document.querySelector("[data-search-authors]");
for (const authorId in authors) {
  const optionElement = document.createElement('option');
  optionElement.value = authorId;
  optionElement.textContent = authors[authorId];
  authorSelect.appendChild(optionElement);
}
// Selecting the element with the attribute '[data-search-authors]' and creating 'option' elements for each author in the 'authors' object. The 'option' elements are then appended to the 'authorSelect' element.

const genreSelect = document.querySelector("[data-search-genres]");
for (const genreId in genres) {
  const optionElement = document.createElement('option');
  optionElement.value = genreId;
  optionElement.textContent = genres[genreId];
  genreSelect.appendChild(optionElement);
}
// Selecting the element with the attribute '[data-search-genres]' and creating 'option' elements for each genre in the 'genres' object. The 'option' elements are then appended to the 'genreSelect' element.

//This code manages the display of book details, allows users to open and close the details overlay, handles book clicks to show corresponding details, and creates options for authors and genres in search filtering.







// Change themes
const dataSettingsTheme = document.querySelector('[data-settings-theme]');
const saveButton = document.querySelector("body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary");
saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (dataSettingsTheme.value === 'day') {
    document.querySelector('body').style.setProperty('--color-dark', day.dark);
    document.querySelector('body').style.setProperty('--color-light', day.light);
    if (typeof appoverlays !== 'undefined') {
      appoverlays.settingsOverlay.close();
    }
  }
  if (dataSettingsTheme.value === 'night') {
    document.querySelector('body').style.setProperty('--color-dark', night.dark);
    document.querySelector('body').style.setProperty('--color-light', night.light);
    if (typeof appoverlays !== 'undefined') {
      appoverlays.settingsOverlay.close();
    }
  }
  document.querySelector("[data-settings-overlay]").style.display = "none";
});
// Selecting the element with the attribute '[data-settings-theme]' and the save button element. Adding a 'click' event listener to the save button. When clicked, it prevents the default form submission, checks the value of 'dataSettingsTheme', and sets the body colors accordingly. If the 'appoverlays' object is defined, it closes the settings overlay. Finally, it hides the element with the attribute '[data-settings-overlay]'.

//This code enables users to change themes and handles the logic for applying the selected theme. It also closes the settings overlay and hides the settings panel after the theme is saved.







const showMoreButton = document.querySelector('[data-list-button]');
// Selecting the element with the attribute '[data-list-button]'

// Update the text of the "Show More" button to display how many more items will be displayed
const numItemsToShow = Math.min(books.length - endIndex);
// Calculating the number of items that can be shown
const showMoreButtonText = `Show More <span style="opacity: 0.5">(${numItemsToShow})</span>`;
// Creating the text to display on the "Show More" button
showMoreButton.innerHTML = showMoreButtonText;
// Updating the inner HTML of the "Show More" button with the generated text

showMoreButton.addEventListener('click', () => {
  // Adding a 'click' event listener to the "Show More" button
  const fragment = document.createDocumentFragment();
  // Creating a new document fragment to add books to
  startIndex += 36;
  endIndex += 36;
  // Updating the start and end indices for the range of books to display
  const startIndex1 = startIndex;
  const endIndex1 = endIndex;
  // Creating new variables to store the updated indices
  const extracted = books.slice(startIndex1, endIndex1);
  // Extracting a subset of books to display based on the updated indices
  for (const { author, image, title, id, description, published } of extracted) {
    // Looping through the extracted books and creating a preview element for each
    const preview = document.createElement('dl');
    preview.className = 'preview';
    preview.dataset.id = id;
    preview.dataset.title = title;
    preview.dataset.image = image;
    preview.dataset.subtitle = `${authors[author]} (${new Date(published).getFullYear()})`;
    preview.dataset.description = description;
    // preview.dataset.genre = genres;
    preview.innerHTML = /*html*/`
      <div>
        <image class='preview__image' src="${image}" alt="book pic"/>
      </div>
      <div class='preview__info'>
        <dt class='preview__title'>${title}</dt>
        <dt class='preview__author'>By ${authors[author]}</dt>
      </div>`;
    fragment.appendChild(preview);
    // Appending the preview element to the document fragment
  }
  const booklist1 = document.querySelector('[data-list-items]');
  booklist1.appendChild(fragment);
  // Appending the book previews to the page

  // Update the text of the "Show More" button to display how many more items will be displayed
  const numItemsToShow = Math.min(books.length - endIndex);
  const showMoreButtonText = `Show More <span style="opacity: 0.5">(${numItemsToShow})</span>`;
  showMoreButton.innerHTML = showMoreButtonText;
});

//This code implements a "Show More" button functionality that dynamically loads and displays additional book items. When the button is clicked, it updates the range of books to display, creates preview elements for each book, appends them to the page, and updates the button text to indicate the remaining number of items.






/* Search */
const dataSearchForm = document.querySelector("[data-search-form]");
const searchOverlay = document.querySelector("[data-search-overlay]");
const dataListItems = document.querySelector("[data-list-items]");
const dataSearchResults = document.querySelector("[data-search-results]");
const dataErrorMessage = document.querySelector("[data-error-message]");
const dataBackdrop = document.querySelector("[data-backdrop]");

dataSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchOverlay.style.display = "none";

    const form = document.getElementById("search"); // get the form element by ID
    const titleInput = form.querySelector("[data-search-title]"); // get the title input field
    const genreSelect = form.querySelector("[data-search-genres]"); // get the genre select field
    const authorSelect = form.querySelector("[data-search-authors]"); // get the author select field

    const title = titleInput.value; // get the value of the title input field
    const genre = genreSelect.value; // get the value of the selected genre
    const author = authorSelect.value; // get the value of the selected author

    const results = searchBooks(title, genre, author);

    console.log(results);

    console.log(`form title1=${title} genre1=${genre} author1=${author}`)

  dataSearchForm.reset();
 
});

/* Helper function: displayBooksList */
function displayBooksList(container, books) {
  // Code for displaying the list of books in the specified container
}

// Function to search for books based on the selection
function searchBooks(title, genre, author) {
    return books.filter(book => {
        let matches = true;
        if (title && book.title.toLowerCase().indexOf(title.toLowerCase()) === -1) {
            matches = false;
        }
        if (genre && book.genres.indexOf(genre) === -1) {
            matches = false;
        }
        if (author && book.author !== author) {
            matches = false;
        }
        return matches;
    });
}

//This code implements a search functionality for filtering and displaying a list of books based on user input. When the search form is submitted, it retrieves the values of the title, genre, and author fields. Then, it calls the searchBooks function, passing the input values as parameters, to filter the books array and return the matching results. The displayBooksList function can be used to display the filtered books in a specified container.






//The line return matches; is used to determine whether a book matches the search criteria or not, and it returns a boolean value indicating the result. If matches is true, it means the book satisfies all the search criteria, and if it's false, it means the book does not meet the search criteria.


// function displayBooksList(container, books) {
//   container.innerHTML = ""; 

//   if (books.length > 0) {
    
//     books.forEach(book => {
//       const bookElement = document.createElement("div");
//       bookElement.textContent = book.title;
//       container.appendChild(bookElement);
//     });
//   } else {
    
//     const messageElement = document.createElement("div");
//     messageElement.textContent = "No books found.";

//     container.appendChild(messageElement); // Append the message element to the container
//   }
// }

// const results = searchBooks(title, genre, author);
// displayBooksList(dataSearchResults, results);
