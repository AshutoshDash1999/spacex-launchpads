import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  MapPinIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

function LaunchpadCard(props: {
  name: string;
  fullName: string;
  region: string;
  status: string;
  // launches: object;
  launch1: string;
  launch2: string;
  launch3: string;
  details: string;
  imageSrc: string;
}) {
  const {
    name,
    fullName,
    region,
    status,
    launch1,
    launch2,
    launch3,
    details,
    imageSrc,
  } = props;

  return (
    <div className="p-4 max-w-5xl border-2 border-[#6cb8ba] bg-[#112240] text-slate-400 shadow-lg rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {name} <span className="italic">({fullName})</span>
        </h2>
        <p className="text-xl flex items-center">
          <MapPinIcon className="h-4" /> {region}
        </p>
      </div>
      <p className="flex space-x-2">
        <span className="font-bold">Status:</span>{" "}
        <span className="capitalize">{status}</span>
        {status === "active" ? (
          <CheckCircleIcon className="h-6 text-green-400" />
        ) : status === "retired" ? (
          <XCircleIcon className="h-6 text-red-400" />
        ) : (
          <InformationCircleIcon className="h-6 text-yellow-400" />
        )}
      </p>
      <div className="mt-4">
        <h3 className="underline underline-offset-4 text-xl font-bold">
          About {name}
        </h3>
        <div className="flex justify-center">
          <img className="h-48 rounded-xl" src={imageSrc} alt="" />
        </div>
        <p className="py-2">{details}</p>
      </div>

      <div className="mt-4">
        {launch1 === "undefined" ? (
          <div></div>
        ) : (
          <div>
            <h3 className="underline underline-offset-4 text-xl font-bold">
              Launches with Flight ID
            </h3>

            <ol className="list-decimal ml-4">
              <Link to="/aboutLaunch" state={launch1}>
                <li className="cursor-pointer">
                  <p className="flex items-center">
                    {launch1} <ArrowTopRightOnSquareIcon className="h-4 pl-2" />
                  </p>
                </li>
              </Link>
              <Link to="/aboutLaunch" state={launch2}>
                <li className="cursor-pointer">
                  <p className="flex items-center">
                    {launch2} <ArrowTopRightOnSquareIcon className="h-4 pl-2" />
                  </p>
                </li>
              </Link>
              <Link to="/aboutLaunch" state={launch3}>
                <li className="cursor-pointer">
                  <p className="flex items-center">
                    {launch3} <ArrowTopRightOnSquareIcon className="h-4 pl-2" />
                  </p>
                </li>
              </Link>
              
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default LaunchpadCard;
