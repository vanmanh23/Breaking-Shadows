
import axios from "axios";
import {API_URL} from "./URL/apiUrl"
import * as Location from "expo-location";

export const fetchKnowledgeList = async () => {
  try {
    console.log(API_URL)
    const response = await axios.get(API_URL + "knowledge/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};


export const fetchExpertList = async () => {
  try {
    const response = await axios.get(API_URL + "experts/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const sendEmail = async () => {
  try {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const response = await axios.post(API_URL + "send-email/", {
      subject: "[URGENT] Emergency Help Needed - I Am in Danger",
      message:
        "Dear friends, family, and trusted contacts, I am currently in a dangerous situation and urgently need your help. This is a call for immediate assistance, and your support is crucial.\n\nPlease see the important details below:\n\n- **My current location:** [Your location or nearest known landmark]\n- **Last known time of communication:** [Time and date of this message]\n- **Contact details for immediate support:** [Your phone number or alternative contact]\n\nPlease reach out to me or notify the local authorities as soon as possible. I may not be able to respond immediately, but any efforts to locate and assist me could make a significant difference.\n\nYour timely response could be life-saving. Please do not ignore this message.\n\nThank you so much for your help and support in this critical time.\n\nSincerely,\n[Your Name]",
      ip: `https://www.google.com/maps?q=${latitude},${longitude}`,
      recipient_email: ["nhatngo1205q@gmail.com", "manhnguyen23012003@gmail.com"],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

