import * as React from 'react';

import consts from 'consts';

import { getImageUrl } from 'libraries/utils/url';
import { get } from 'libraries/utils/fetch';

import styles from './styles.scss';
// import 'bootstrap/dist/css/bootstrap.css'

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

function SalmonCompare() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='column'>
                {ItemDetail(5264807434,201718860)}
            </div>
            <div className='column'>
                {ItemDetail(4048092617,296368663)}
            </div>
            <div className='column'>
                {ItemDetail(4136977878,251914933)}
            </div>
            </div>
            
        </div>
    );
}

export default SalmonCompare;
