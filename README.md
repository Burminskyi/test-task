
<h1>Car Rental Website</h1>

<p>This project is a web application for a car rental company in Ukraine. It allows users to browse and filter through a catalog of cars available for rent and view details of each car. Users can also add cars to their favorites list, and there is a contact feature to get in touch with the rental company.</p>

<ul>
<h2>Technologies Used:</h2>
<li>JavaScript</li>
<li>React</li>
<li>Redux</li>
<li>Styled-components</li>
<li>Axios</li>
<li>React-Bootstrap</li>
</ul>

<h3>Pages:</h3>

<h4>Home Page:</h4>

This page provides a general overview of the services offered by the company. The styling and design are at your discretion.

<h4>Catalog Page:</h4>

This page displays a catalog of cars with various specifications. Users can filter cars by brand and hourly rental price.

<h4>Favorites Page:</h4>

On this page, users can view the cars they have added to their favorites list.


<h3>Features:</h3>

Users can view 12 car advertisements on the catalog page, and additional advertisements can be loaded by clicking the "Load more" button.

Users can add car advertisements to their favorites, and the button color changes accordingly. Even after refreshing the page, the favorite status remains.

Users can remove a car from their favorites by clicking the "heart" button again.

Clicking the "Learn more" button opens a modal window with detailed information about the car and its rental conditions.

The modal window can be closed by clicking the "close" button, clicking the backdrop, or pressing the Esc key.

The "Rental car" button is implemented as a link that allows users to contact the company by phone at +380730000000.

Brand filtering is implemented using a dropdown menu with car brands from makes.json.


<h4>The application uses React Router for routing with the following routes:</h4>
<ul><li>"/" - Home Page</li><li>"/catalog" - Catalog Page</li><li>"/favorites" - Favorites Page</li></ul>





<h3>Backend:</h3>

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

<h3>Additional Features:</h3>

Dropdown for filtering by hourly rental prices in $10 increments.

Addes theme switcher.
