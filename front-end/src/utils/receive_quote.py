import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

## funtion to receive user from front end and send them a quote to their email address
def send_mobile_quote(email, typeOfApp, budget):
    ## url to send the quote to
    finalize_email = "mugitajeromebernard@gmail.com"
    email_password = "16CountsX@rt"

    msg = MIMEMultipart()
    msg['From'] = finalize_email
    msg['To'] = email
    msg['Subject'] = "Your Quote"

    msg.attach(MIMEText("Thank you for your interest in our services. We have received your request and will get back to you shortly."))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(finalize_email, email_password)
        smtp.send_message(msg)