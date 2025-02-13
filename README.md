# ResQNet

ResQNet is a React Native application designed to provide immediate emergency assistance for both individuals and bystanders. Built using Expo and expo-router, ResQNet aims to streamline emergency responses through quick SOS activations, medical record management, and real-time communication with paramedics.

## System Overview

ResQNet is part of a comprehensive emergency response system comprising three applications:

1. **User App (ResQNet):** This mobile application enables individuals to send SOS alerts, manage medical records, and communicate with paramedics.
2. **Ambulance/Paramedic App:** A dedicated mobile application for paramedics to receive SOS alerts, navigate to the scene, and communicate with patients.
3. **Hospital Dashboard Website:** A web-based dashboard for hospitals to monitor incoming SOS cases, manage patient data, and coordinate emergency responses.

### Related Documentation & Repositories

- [Full System Workflow Documentation](https://drive.google.com/file/d/1DJB59ix9WUSUfab-ajpdImURwLWaTkiy/view)
- [Project Presentation](https://drive.google.com/drive/folders/1raMnEMOWAjBdKV_Pe71hgRez13r0FOgT)
- Ambulance/Paramedic App GitHub Repository - _(to be added)_
- Hospital Dashboard Website GitHub Repository - _(to be added)_
- Complete Wireframes for the System - _(to be added)_

## Hackathon Submission
- **Event:** SparkHack at Techfest "Convolution X"
- **Team Name:** ChronoShift

## Table of Contents
1. [Installation](#installation)
2. [App Features](#app-features)
3. [Wireframe Overview](#wireframe-overview)
4. [Technologies Used](#technologies-used)
5. [License](#license)

## Installation

Follow these steps to set up the project locally:

```console
# Clone the repository
git clone https://github.com/ChronoShiftJU/resqnet.git

# Navigate into the project directory
cd resqnet

# Install dependencies
npm install

# Start the project
npx expo start
```

## App Features

- **Onboarding & Authentication:** Smooth onboarding with secure login, registration, and profile setup.
- **SOS Activation:** Quick SOS for self or others with real-time ambulance tracking and communication.
- **Medical Record Management:** Upload and manage personal medical records.
- **Emergency Contacts:** Add and manage emergency contacts for faster assistance.
- **Real-Time Communication:** Chat and call features for direct communication with paramedics.
- **Profile & Settings:** Customizable profile, app settings, and privacy controls.

## Wireframe Overview

### I. Onboarding & Authentication

1. **Welcome Screen**  
   - **Title:** ResQNet  
   - **Sections:** Logo, Tagline, **BTN:** Get Started

2. **Registration / Login**  
   - **Title:** Welcome to ResQNet  
   - **Sections:**  
     - **Login:** INP: Email/Phone, INP: Password, **BTN:** Login, **Link:** Forgot Password  
     - **Register:** **BTN:** Register

3. **Registration Form**  
   - **Title:** Create Account  
   - **Sections:** INP: Full Name, INP: Email, INP: Phone, INP: Password, INP: Confirm Password, **Checkbox:** Terms & Conditions, **BTN:** Register, **Link:** Login

4. **Profile Setup**  
   - **Title:** Complete Your Profile  
   - **Sections:**  
     - Medical Records: Text, **BTN:** Upload, Text: No Records  
     - Emergency Contacts: Text, **BTN:** Add Contact, Contact List, Text: No Contacts  
     - **BTN:** Save & Home

### II. Main App Interface (Citizen Workflow - Home Screen)

5. **Home Screen**  
   - **Title:** ResQNet  
   - **Sections:**  
     - Greeting (Text)  
     - Main Content: **BTN:** SOS Self (Large), **BTN:** SOS Others (Small), Status Display (Text)  
     - Bottom Navigation: Icons for Home, Profile, History, Settings

### III. SOS Self Workflow

6. **SOS Self Activation**  
   - **Title:** SOS Activated - Self  
   - **Sections:** Countdown Timer, **BTN:** Cancel SOS (Large), Accident Details (INP: Text Area), **BTN:** Send SOS Now

7. **Waiting for Ambulance (Patient View)**  
   - **Title:** Waiting for Ambulance  
   - **Sections:** Status Message, Ambulance Status (Text), Map Display, **BTN:** Message Paramedic, **BTN:** Call Paramedic, Emergency Contact Status (Text)

8. **Chat with Paramedic**  
   - **Title:** Chat with Paramedic  
   - **Sections:** Chat Window, Message Input, **BTN:** Send

### IV. SOS Others Workflow

9. **SOS Others Activation - Scan Patient**  
   - **Title:** SOS - Helping Others  
   - **Sections:**  
     - Instruction (Text)  
     - Option 1: NFC - **BTN:** Scan NFC, Instruction Text, Status Text  
     - Option 2: Location - **BTN:** Use Location, Text, Status Text

10. **Patient Details (SOS Others)**  
    - **Title:** Patient in Need  
    - **Sections:** Patient Info (Text), Location (Map, Address), **BTN:** Confirm SOS - Help, **BTN:** Cancel

11. **Merged Request Confirmation**  
    - **Title:** SOS Already Active  
    - **Sections:** Message (Text), Patient Info (Map), **BTN:** Acknowledge & Assist, **BTN:** Cancel

### V. Profile & Settings

12. **Profile & Settings**  
    - **Title:** Profile & Settings  
    - **Sections:** Profile Info (Edit: Name, Email, Phone), Medical Records, Emergency Contacts, App Settings (Notifications, Privacy, NFC, Accessibility, Help, About, Logout)

### VI. System Prompts

- **Prompt 1: "ARE YOU OKAY?"**  
  - **Sections:** Text: "ARE YOU OKAY?", **BTN:** I'm OK, Countdown Timer

## Technologies Used

- **Framework:** React Native with Expo
- **Navigation:** expo-router
- **State Management:** React Context API
- **APIs & Libraries:** Map API for live tracking, NFC integration, Secure Storage for authentication

## License

This project is licensed under the MIT License.

---

**Team ChronoShift**

