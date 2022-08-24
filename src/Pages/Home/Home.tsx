import React, { useEffect, useState } from "react";
import axios from "axios";
import LaunchpadCard from "../../Components/LaunchpadCard/LaunchpadCard";
import { Link } from "react-router-dom";

function Home() {
  const [launchpadList, setlaunchpadLists] = useState([]);
  useEffect(() => {
    const url = "https://api.spacexdata.com/v4/launchpads";
    axios
      .get(url)
      .then((response) => {
        setlaunchpadLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(launchpadList);

  return (
    <div className="space-y-8 flex flex-col items-center">
      {launchpadList.map((item) => (
        // <Link to="/aboutLaunch" state={item} key={item["id"]}>
        //   </Link>
          <LaunchpadCard
          key={item["id"]}
            {...{
              fullName: `${item["full_name"]}`,
              name: `${item["name"]}`,
              region: `${item["region"]}`,
              status: `${item["status"]}`,
              launch1: `${item["launches"][0]}`,
              launch2: `${item["launches"][1]}`,
              launch3: `${item["launches"][2]}`,
              details: `${item["details"]}`,
              imageSrc: `${item["images"]["large"][0]}`,
            }}
          />
      ))}
    </div>
  );
}

export default Home;
