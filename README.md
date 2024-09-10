# Mail Tracking System - Proof of Concept

This is a **Mail Open Tracking System** built as a **Proof of Concept (POC)** using **Hono**, **Bun**, and **TypeScript**. The goal of this POC is to demonstrate the basic functionality of tracking when an email is opened using a transparent image pixel embedded in the email.

## Live Demo
You can check out the live demo hosted [here](https://mailchamp-poc.onrender.com).

## Features
- Tracks when an email is opened.
- Backend powered by **Hono** and **Bun**.
- Uses **Nodemailer** for email handling.
- **UUID** is used for unique tracking links.
- Codebase written in **TypeScript** for type safety and better development experience.

## Tech Stack
- **Bun**: Lightning-fast JavaScript runtime that powers the server-side logic.
- **Hono**: Web framework used for building the API for email tracking.
- **TypeScript**: Ensures type-safe code and better development experience.
- **Nodemailer**: Library for sending emails via SMTP.
- **Mongoose**: MongoDB object modeling for Node.js.
- **UUID**: Generates unique identifiers for tracking emails.

## Project Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Bun**: You can install it [here](https://bun.sh/).
- **Node.js**: [Install Node.js](https://nodejs.org/en/) if it's not already installed.
- **TypeScript**: You can install it globally using the command `npm install -g typescript`.

### Steps to Run the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RajKumar9066/MailChamp-POC.git
   cd MailChamp-POC
