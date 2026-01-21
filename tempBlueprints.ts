// data/tempBlueprints.ts
import type { Blueprint } from "../types/Blueprint";

const tempBlueprints: Blueprint[] = [
  {
    id: "bp1",
    name: "Employment Contract",
    fields: [
      { id: "f1", type: "text", label: "Employee Name", position: { x: "Left", y: "Top" }, width: 200, height: 30, required: true },
      { id: "f2", type: "date", label: "Start Date", position: { x: "Left", y: "Center" }, width: 150, height: 30, required: true },
      { id: "f3", type: "signature", label: "Employee Signature", position: { x: "Right", y: "Bottom" }, width: 250, height: 50, required: true },
      { id: "f4", type: "checkbox", label: "Agree to Terms", position: { x: "Left", y: "Bottom" }, width: 20, height: 20, required: true }
    ]
  },
  {
    id: "bp2",
    name: "Non-Disclosure Agreement",
    fields: [
      { id: "f5", type: "text", label: "Company Name", position: { x: "Left", y: "Top" }, width: 250, height: 30, required: true },
      { id: "f6", type: "text", label: "Recipient Name", position: { x: "Left", y: "Center" }, width: 200, height: 30, required: true },
      { id: "f7", type: "signature", label: "Authorized Signature", position: { x: "Right", y: "Bottom" }, width: 250, height: 50, required: true }
    ]
  },
  {
    id: "bp3",
    name: "Rental Agreement",
    fields: [
      { id: "f8", type: "text", label: "Tenant Name", position: { x: "Left", y: "Top" }, width: 200, height: 30, required: true },
      { id: "f9", type: "text", label: "Landlord Name", position: { x: "Left", y: "Center" }, width: 200, height: 30, required: true },
      { id: "f10", type: "date", label: "Start Date", position: { x: "Left", y: "Bottom" }, width: 150, height: 30, required: true },
      { id: "f11", type: "signature", label: "Tenant Signature", position: { x: "Right", y: "Bottom" }, width: 250, height: 50, required: true },
      { id: "f12", type: "checkbox", label: "Security Deposit Paid", position: { x: "Left", y: "Bottom" }, width: 20, height: 20, required: false }
    ]
  }
];

export default tempBlueprints;
