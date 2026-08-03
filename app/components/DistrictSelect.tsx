"use client";

import { useEffect, useState } from "react";

export default function DistrictSelect() {
  const [districts, setDistricts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch("/api/districts")
      .then((response) => response.json())
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data?.districts) ? data.districts : [];
        setDistricts(list);
      })
      .catch(() => {
        if (active) setDistricts([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <select name="district" defaultValue="" required aria-label="District" disabled={loading}>
      <option value="" disabled>{loading ? "Loading districts..." : "Select district"}</option>
      {districts.map((district) => (
        <option key={district} value={district}>{district}</option>
      ))}
    </select>
  );
}
