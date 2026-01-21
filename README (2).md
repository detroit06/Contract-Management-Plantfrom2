# Contract Managment Platform

## Features
1) Blueprint Management
Create, update, and delete reusable contract blueprints.
Supports multiple field types: text, date, checkbox, signature.
2) Contract Generation
Generate contracts from blueprints.
Fill in field values for each contract.
3) Contract Lifecycle Management
Enforces the contract states: Created → Approved → Sent → Signed → Locked
Revoked contracts can stop progression anytime after creation or sending.
UI shows current status and available actions clearly.
4) Dashboard & Table View
contracts can be filtered/grouped by status: Active, Pending, Signed.
Displays key information: Contract Name, Blueprint Name, Status, Created Date.
Action buttons for viewing or changing contract status.
5) State Control & Rules
No skipping steps in the contract lifecycle.
Locked contracts are immutable.
Revoked contracts cannot proceed further.

## Tech Stack
1)Frontend: React, TypeScript, Vite
2)State Management: useState, useContext
3)Styling: CSS / Tailwind (optional)
4)Version Control: Git

## Project Structure
eurusys-contract-app/
├─ public/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ context/          # Blueprint and Contract context providers
│  ├─ pages/            # Blueprint and Contract pages
│  ├─ types/            # TypeScript type definitions
│  ├─ utils/            # Utility functions
│  ├─ App.tsx           # Main application entry
│  └─ main.tsx          # React DOM render
├─ package.json
├─ tsconfig.json
└─ README.md

## Getting Started
Prerequisites
Node.js ≥ 18
npm or yarn

## Usage
1) Blueprint Creation
Go to the Blueprints Page → Click "Add Blueprint" → Fill fields → Save.
2 )Generate Contract
Select a blueprint → Fill required fields → Generate contract.
3) Manage Contracts
View contracts in the dashboard table → Use action buttons to move contracts along their lifecycle.

## Contract Lifecycle
Created → Approved → Sent → Signed → Locked
        ↘
        Revoked
## Rules:
State transitions cannot be skipped.
Locked contracts cannot be edited.
Revoked contracts cannot proceed further.

## UI Behavior:
Shows current status and available actions.
Buttons disabled if contract is Locked or Revoked.

## Contributing
Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Make your changes
Commit your changes (git commit -m "Add feature")
Push to the branch (git push origin feature/your-feature)
Open a Pull Request

License
