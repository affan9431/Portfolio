# Portfolio Website

## Project Overview

This project is a portfolio website designed to showcase your skills and projects. The website is built using modern web technologies including Tailwind CSS, HTML, GSAP, Shery.js, Type.js, and Supabase for the database.

## Technologies Used

- **Tailwind CSS**: For styling and creating a responsive design.
- **HTML**: For the structure of the website.
- **GSAP**: For animations and transitions.
- **Shery.js**: For interactive elements.
- **Type.js**: For dynamic text effects.
- **Supabase**: For database management and backend functionality.

## Setup Instructions

1. **Initialize a Node.js Project**

   Open your terminal and run the following command to initialize a new Node.js project:

   ```bash
   npm init -y

 2. **Setup Supabase**

   To integrate Supabase with your project, follow these steps:
   
   a). **Create a Supabase Project**
   
   Visit [Supabase](https://supabase.com) and create a new project. 
   
   b). **Obtain Supabase Credentials**
   
 Once your project is created, obtain your Supabase URL and API key from the Supabase dashboard.


   c). **Create a Table**
   
   In the Supabase dashboard, navigate to the **Database** section and create a table to store your data.
   
   ### Configure Authentication Policies
   
   Go to the **Authentication** section, click on **Policies**, and create a new policy to allow data insertion into your table.

   For more detailed information, [click here to watch the setup video](https://your-video-url.com).
   
   By following these steps, you'll set up Supabase for your project and configure it to interact with your database securely. 
   
   d). **Configure Supabase in Your Project**

   Open `query.js` and add your Supabase URL and API key as shown below:

   ```javascript
   // query.js

      import { createClient } from '@supabase/supabase-js';
   
      const supabaseUrl = 'YOUR_SUPABASE_URL';
      const supabaseKey = 'YOUR_SUPABASE_KEY';
      const supabase = createClient(supabaseUrl, supabaseKey);



   


  
