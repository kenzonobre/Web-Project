# Purrfect Paradise

Kenzo Yves Yamashita Nobre	  5028772

Otavio Ferracioli Coletti		11767796

Victor Rodrigues da Silva		12566140

## Introduction
The Purrfect paradise is an online pet shop that offers a wide range of pet products and blogs about events focused on pet animals. The goal of this project is to provide pet owners with a convenient and reliable way to purchase high-quality pet products while also offering them information about relevant events in their area.


## 1. Requirements
- The system have 2 types of users: Clients and Administrators
    - Administrators are responsible for registering/managing administrators, customers, products and blogs provided. The application already comes with an account admin with password admin.
    - Customers are users who access the system to buy products and read blog posts about relevant events about pet animals in their  area.
- The admin record includes : name, id, phone, email.
- Each customer's record includes : name, id, address, phone, email.
- Product records include: name, id, photo, description, price, quantity (in stock), quantity sold.
- Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased through a pix code. The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
- Product Management: Administrators can create/update/read/delete (crud) new products. For example, they can change the stock quantity.
- Blog posts funcionality : The online pet shop differenciates in the relevant events about pet animals shown in the blog section of the site. Users can see the latest news, informative posts and future events to participate with their animals.
- Blog posts Management : Administrators can create/update/read/delete (crud) new posts.


## 2. Project Description
To purchase products from our online pet store, customers can choose their desired items and add them to their virtual cart. The quantity of each product can be easily selected and adjusted as needed. When it's time to complete the purchase, customers can use the Pix code payment system to make a secure and hassle-free payment. Once payment is confirmed, our inventory management system automatically updates the stock quantities to reflect the products sold, ensuring accurate product availability information for future customers. It's important to note that carts are only emptied after payment is received, or if the customer chooses to remove items from the cart themselves.

Besides that, as part of the online pet store project, a special feature is implemented that enables users to access a dedicated "Events" tab in the navigation bar. This feature offers a valuable resource to pet owners who are looking to stay informed about the latest events related to pets, including adoption drives, spaying/neutering clinics, grooming sessions, and other events that might be of interest. By clicking on the "Events" tab, users can browse through a comprehensive list of upcoming events, each of which is accompanied by a brief description of what to expect. This can help users to make informed decisions about which events to attend and how they can best care for their pets. Importantly, only administrators are able to add new posts to this tab, ensuring that the information provided is reliable and up-to-date. 

Here's the [Navigation diagram](https://www.figma.com/proto/aoYbKfVo5twtHE4pXq64fw/Untitled?node-id=228-427&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=228%3A427&show-proto-sidebar=1) and the [Mockup](https://www.figma.com/file/aoYbKfVo5twtHE4pXq64fw/Untitled?type=design&node-id=0-1&t=VsHLKqAyVCCDRMHS-0) used to plan the project.

To make the online pet shop store a sustainable and productive application, it is necessary to store some information in a server. The main information that will be saved in the database is the data of administrators (such as name, id, address, phone, email, login name and password) data of customers (such as name, id, phone, email, login name and password), products (such as name, identifier, photo, description, price, quantity in stock and quantity sold) and events (such as name, photo, description, date, time and location).


## 3. Comments about the code
## 4. Test Plan
## 5. Test Results
## 6. Build Procedures
## 7. Problems
## 8. Comments
