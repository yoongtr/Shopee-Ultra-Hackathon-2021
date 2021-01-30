import * as React from 'react';

import consts from 'consts';

import { getImageUrl } from 'libraries/utils/url';
import { get } from 'libraries/utils/fetch';

import styles from './styles.scss';
// import 'bootstrap/dist/css/bootstrap.css';

function ItemDetail(input_itemid, input_shopid) {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await get(`${consts.API_URL}item/get_info`, {
        item_id: input_itemid,
        shop_id: input_shopid,
      });
      if (isMounted && response) {
        setItem(response.data);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!item) {
    return (
      <>
        Loading Item Data...
        <br />
      </>
    );
  }

  return (
    <div className={styles.itemDetailContainer}>
      <h3 className={styles.itemName}>{item.name}</h3>
      <img
        className={styles.itemImage}
        src={getImageUrl(item.cover)}
        width='100'
      />
      
      <div>Price: ${item.price}</div>
      <div>Sold: {item.sold}</div>
      <div>Stock: {item.stock}</div>
    </div>
  );
}

function StrawberryCompare() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='column'>
                {ItemDetail(7129234967,243827036)}
            </div>
            <div className='column'>
                {ItemDetail(4269377771,296575148)}
            </div>
            <div className='column'>
                {ItemDetail(9202438062,100214043)}
            </div>
            </div>
            <div className="col-6">
              abc
            </div>
            <div className="col-6">
              weee
            </div>
        </div>
        
    );
}

export default StrawberryCompare;
