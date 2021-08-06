import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

export interface Item {
  id: number,
  url: string;
  title: string;
  content: string;
}

export interface List {
  items: Item[];
  onClick: (item: Item) => void,
}

export const ListOfItems: FC<List>  = ({ items, onClick }) => {

  return (
    <ul>
      {
        items.map((item) => (
          <li key={item.id}>
            <Button variant="link" onClick={() => onClick(item)}>
              { item.title }
            </Button>
          </li>
        ))
      }
    </ul>
  )
};
