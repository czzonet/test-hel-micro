import React, { useState } from "react";
import { callRemoteMethod } from "./callRemoteMethod";

type typeVersion = "2.0.0" | "2.0.1";

const extend = Object.assign;

export const World: React.FC = () => {
  const [s, setS] = useState({
    v: 0,
    loading: false,
  });

  const h = (v?: typeVersion) => {
    setS((p) => extend({}, p, { loading: true }));
    callRemoteMethod(v)
      .then((d) => {
        console.log(d);
        setS((p) => extend({}, p, { v: d }));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setS((p) => extend({}, p, { loading: false }));
      });
  };
  return (
    <div>
      <p>
        {s.v} {s.loading ? "loading" : ""}
      </p>
      <button onClick={() => h()}>latest</button>
      <button onClick={() => h("2.0.0")}>2.0.0</button>
      <button onClick={() => h("2.0.1")}>2.0.1</button>
    </div>
  );
};
