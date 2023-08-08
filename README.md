# Calendar Scheduling System

Welcome to the Calendar Scheduling System! This application allows users to upload a CSV file with meeting details and sends calendar invites to the listed invitees.

## Features

- Upload a CSV file containing meeting details (topic description, date, time, comma separated invitees).
- Process the uploaded CSV file and generate iCal file.
- Send email notifications to invitees with iCal invite.
- User-friendly web interface for easy interaction.

## Technologies Used

- Node.js
- Express.js
- HTML
- Tailwind CSS
- [Nodemailer](https://nodemailer.com/about/) for sending email notifications
- [iCal](https://www.npmjs.com/package/ical-generator) for creating iCal calendars.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```
   $ git clone https://github.com/deekay1712/calendar-scheduling-system.git
   ```
2. Install the libraries
   
   ```
   $ cd server
   $ npm i
   ```
3. Create .env file in /server
   ```
   SMTP_USER=Enter_Mail_Id
   SMTP_PASS=Enter_SMTP_PASSWORD
   ```
4. Go to /server dir and run.
   ```
   $ npm run dev
   ```
5. Open index.html from /client dir.
