import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';

import {
  Item,
  ListOfItems,
} from '../../components/ListOfItems';

interface PostsProps {
  items: Item[]
}

export const Posts: FC<PostsProps> = ({ items }) => {
  const [item, setItem] = useState<Item | undefined>();

  const onSelectItemClick = (item: Item) => {
    setItem(item);
  };

  const onClearClick = () => {
    setItem(undefined);
  };


  if (item) {
    return (
      <div>
        <Button variant="danger" onClick={onClearClick}>Go back</Button>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    );
  }

  return (
    <div>
      <ListOfItems items={items} onClick={onSelectItemClick} />
    </div>
  );
};
