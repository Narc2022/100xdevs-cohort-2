import axios from "axios";
import Image from "next/image";

async function getUserDetails() {
  // artificial delay
  await new Promise((r) => setTimeout(r, 5000));
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}

//create an async component concept available only
// in next js that is also new for next js

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name:
            {userDetails.name} <br /> Email: {userDetails?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
