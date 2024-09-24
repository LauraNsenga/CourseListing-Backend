# CourseListing-Backend
Backend folder for Course Listing Web App

## Project Setup
1. Clone the project into your **XAMPP/xamppfiles/htdocs** directory.
```
git clone https://github.com/LauraNsenga/CourseListing-Backend.git
```

2. Install the project.
```
npm install
```

3. Configure **Apache** to point to **Node** for API requests.
    - We recommend using XAMPP to serve this project.
    - In XAMPP, find the **Edit/Configure** button for **Apache**.
    - Edit the **conf** file, labeled **httpd.conf**. 
    - It may warn you when opening it but open it anyway.
    - Add the following line as the **last line**:
    
    ```
    ProxyPass /course http://localhost:3100 
    ```

    - Find the following line and remove the **#** at the front of the line.
    
    ```
    LoadModule proxy_http_module modules/mod_proxy_http.so
    LoadModule proxy_http2_module modules/mod_proxy_http2.so
    ```
    
    - Save the file.
    - **Restart Apache** and exit XAMPP.

4. Make a local **course** database.
    - Create a schema/database.
    - The sequelize in this project will make all the tables for you.

5. Modify db.config.js
    - PASSWORD = '**your-local-database-password**'

6. Compile and run the project locally.
```
npm run start
```

7. Test your project.
    - Note that to test your backend, you don't need anything to be running.
```
npm run test
```
