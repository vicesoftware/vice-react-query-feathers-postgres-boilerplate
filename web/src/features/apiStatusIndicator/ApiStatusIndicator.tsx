import * as React from 'react';
import { useQuery } from 'react-query'
import Badge from 'react-bootstrap/Badge'

export const  ApiStatusIndicator = () => {
    const isHealthyQuery = useQuery('healthCheck', () =>     
    fetch('health-check')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return false;
      })
      .then(json => json.isHealthy)
      .catch(e => {
        console.log(e);
        return false;
      })
  , { refetchInterval: 500 });

  const isHealthy = isHealthyQuery?.data || false;

    return (
        <Badge variant={isHealthy ? 'success' : 'danger'}>
            {isHealthy ? "API is healthy": "API is not healthy"}
        </Badge>
    );
}

 