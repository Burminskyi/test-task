
Car Rental Website
This project is a web application for a car rental company in Ukraine. It allows users to browse and filter through a catalog of cars available for rent and view details of each car. Users can also add cars to their favorites list, and there is a contact feature to get in touch with the rental company.

Technologies Used:
JavaScript
React
Redux
Styled-components
Axios
React-Bootstrap

Pages:
Home Page: This page provides a general overview of the services offered by the company. The styling and design are at your discretion.
Catalog Page: This page displays a catalog of cars with various specifications. Users can filter cars by brand and hourly rental price.
Favorites Page: On this page, users can view the cars they have added to their favorites list.

Features:
Users can view 12 car advertisements on the catalog page, and additional advertisements can be loaded by clicking the "Load more" button.
Users can add car advertisements to their favorites, and the button color changes accordingly. Even after refreshing the page, the favorite status remains.
Users can remove a car from their favorites by clicking the "heart" button again.
Clicking the "Learn more" button opens a modal window with detailed information about the car and its rental conditions.
The modal window can be closed by clicking the "close" button, clicking the backdrop, or pressing the Esc key.
The "Rental car" button is implemented as a link that allows users to contact the company by phone at +380730000000.
Brand filtering is implemented using a dropdown menu with car brands from makes.json.
The application uses React Router for routing with the following routes:
"/" - Home Page
"/catalog" - Catalog Page
"/favorites" - Favorites Page

Backend:
To work with the list of advertisements, a custom backend is created using the UI service MockAPI. The resource "adverts" is used, and the structure of an advert is as follows:
json
{
  "id": "unique_id",
  "year": "car_year",
  "make": "car_make",
  "model": "car_model",
  "type": "car_type",
  "img": "car_image_url",
  "description": "car_description",
  "fuelConsumption": "fuel_consumption",
  "engineSize": "engine_size",
  "accessories": "accessories_list",
  "functionalities": "functionalities_list",
  "rentalPrice": "hourly_rental_price",
  "rentalCompany": "rental_company_name",
  "address": "rental_company_address",
  "rentalConditions": "rental_conditions",
  "mileage": "car_mileage"
}

Additional Features
Dropdown for filtering by hourly rental prices in $10 increments.
Addes theme switcher.
