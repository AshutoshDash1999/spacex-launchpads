import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Launches() {
  const [launchData, setLaunchData] = useState([]);
  const location = useLocation();
  const launch_id = location.state;
  // console.log(launch_id);
  useEffect(() => {
    const launch_url = `https://api.spacexdata.com/v3/launches/${launch_id}`;
    axios
      .get(launch_url)
      .then((response) => {
        setLaunchData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(launchData)

  return (
    <div className="text-gray-200 flex justify-center">
      <div className="flex justify-between w-2/3 border-2 p-4 border-[#6cb8ba] bg-[#112240] rounded-lg">
        <div>
          <p className="text-3xl font-bold">{launchData["mission_name"]}</p>
          <p>
            <span className="font-bold">Launch Site: </span>
            <span className="italic">{launchData["launch_site"].site_name_long}</span>
          </p>
          <p>
            <span className="font-bold">Launch Year: </span>{" "}
            <span className="italic">{launchData["launch_year"]}</span>
          </p>
          <p>
            <span className="font-bold">Rocket Name: </span>{" "}
            <span className="italic">{launchData["rocket"].rocket_name}</span>
          </p>
          <p>
            <span className="font-bold">Rocket Type: </span>{" "}
            <span className="italic">{launchData["rocket"].rocket_type}</span>
          </p>
          <p><a className="underline underline-offset-4" href={launchData["links"].wikipedia}>Wikipedia</a> <a className="underline underline-offset-4" href="">News Article</a></p> 
        </div>
        <div>
          <img className="h-48" src={launchData["links"].mission_patch} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Launches;
