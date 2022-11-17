import React, { useEffect, useMemo } from "react";

import {Grid} from "./Grid/index";

export default function Index() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
    return (<Grid dataSource={dataSource}></Grid>)
}
