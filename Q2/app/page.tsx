"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getToken = async () => {
      const apiUrl = "http://20.244.56.144/train/register";

      const data = {
        companyName: "Train Central",
        ownerName: "ram",
        rollNo: "2006468",
        ownerEmail: "2006468@kiit.ac.in",
        accessCode: "oJnNPG",
      };

      const registerCompany = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(registerCompany);
    };
  }, []);
  return <main>Hello</main>;
}
