import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Launches() {
  const [launchData, setLaunchData] = useState([]);
  const location = useLocation();
  const launch_id = location.state;
  console.log(launch_id);
  useEffect(() => {
    const launch_url = `https://api.spacexdata.com/v3/launches/${launch_id}`;
    console.log(launch_url);

    axios
      .get(launch_url)
      .then((response) => {
        setLaunchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="text-gray-200 w-2/3 border-2">
      {launchData ? (
        <div className="">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold">
                Mission Name: {launchData["mission_name"]}
              </p>
              <p>Launch Year: {launchData["launch_year"]}</p>
              <p>Launch Site: {launchData["launch_site"]["site_name_long"]}</p>
              <p className="underline underline-offset-4">
                <a href={launchData["links"]["wikipedia"]}>Wikipedia Article</a>
              </p>
            </div>
            <div>
              <img
                className="h-48"
                src={launchData["links"]["mission_patch"]}
                alt=""
              />
            </div>
          </div>
          {/* {
          launchData["links"]["youtube_id"]?
          
        <div className="p-4 flex justify-center">
          <iframe
          width="560"
          height="315"
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
          :
        } */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Launches;
