import React, { useEffect, useState } from "react";
import porjectdata from "../data/Projectdata.json";

const useProject = () => {
  const [allprojectData, setallProjectData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setallProjectData(porjectdata.projects);
        setloading(false);
      } catch {
        seterror(true);
        setloading(false);
      } finally {
        setloading(false);
        seterror(false);
      }
    };

    fetchData();
  }, []);

  const getProjectByTitle = (title) => {
    return allprojectData.find((item) => item.title === title);
  };
  return {
    allprojectData,
    getProjectByTitle,
    loading,
    error,
  };
};

export default useProject;
