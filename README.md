# Unique Integer Processor

## Overview

Unique Integer Processor is a simple web application that allows users to upload a text file containing integers. The application processes the file to identify and sort unique integers within a specified range. The processed results are then made available for download.

## Features

- Upload a text file containing integers.
- Identify and sort unique integers within the range of -1023 to 1023.
- Download the processed results.

## Usage

### Running the Application

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/NiyonshutiDavid/app.git
   cd app
   ```

2. **Install Dependencies:**

   Ensure you have Python 3.6+ and pip installed. Then, install the required packages:

   ```bash
   pip install flask
   ```

3. **Run the Application:**

   Start the Flask application:

   ```bash
   ./main.py
   ```

   The application will be available at `http://localhost:5000`.

### Accessing the Application

1. Open a web browser and navigate to `http://localhost:5000`.

2. On the homepage, click on the "Choose File" button and select the text file containing the integers you want to process. Only `.txt` files are allowed.

3. Click the "Upload" button to upload and process the file.

4. Once the file is processed, you will be redirected to a result page where you can download the processed file.

   ![Screenshot 2024-05-16 211545](https://github.com/NiyonshutiDavid/app/assets/144002340/3692a0df-9d2c-44df-8c1c-a858b4cee3ae)
   ![Screenshot 2024-05-22 165818](https://github.com/NiyonshutiDavid/app/assets/144002340/e10e2c2f-a9b7-4b61-9f66-ac4bd988cf5e)




### File Processing

- The uploaded text file is read, and each line is checked to ensure it contains a valid integer.
- Only unique integers within the range of -1023 to 1023 are considered.
- The unique integers are sorted and saved to a new text file.
- The result page provides a link to download the processed file.

### Available at Domain

The application can also be accessed at developer domain [www.davidniyonshuti.tech](http://www.davidniyonshuti.tech)

## Project Structure

```
app/
├── templates/
│   ├── index.html
│   ├── result.html
├── uploads/
├── results/
├── main.py
```

- `templates/` contains the HTML files for the web interface.
- `uploads/` is the directory where uploaded files are temporarily stored.
- `results/` is the directory where processed files are saved.
- `main.py` contains the main Flask application code.

## Dependencies

- Flask
- os
- time
- render_templates

## Developer

David Niyonshuti


## Contact

For questions or feedback, please contact [David Niyonshuti](mailto:d.niyonshut@alustudent.com).

This README provides clear instructions on how to set up, run, and use the application. It also includes information about the application's functionality and the structure of the project.
