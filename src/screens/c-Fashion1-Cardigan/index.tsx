import * as React from 'react';

import consts from 'consts';

import {
  LinkToProduct
} from 'libraries/components/Link';

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
    <div className="container-fluid">
      <div className={styles.itemDetailContainer}>
        <p></p>
        <img
          className={styles.itemImage}
          src={getImageUrl(item.cover)}
          width='100'
        />
        <h3 className={styles.itemName}><LinkToProduct shopid={item.shop_id} itemid={item.item_id}>{item.name}</LinkToProduct></h3> 
        <div>Price: ${item.price}</div>
        <div>Sold: {item.sold}</div>
        <div>Ratings: {item.rating}</div>
        <p></p>
      </div>
    </div>
    
  );
}

function CardiganCompare() {
    return (
        <div className='container-fluid'>
            <div className='col-12'>
                {ItemDetail(4216362173,223642343)}
            </div>
            <div className='col-12'>
                {ItemDetail(2875950664,176182794)}
            </div>
            <div className='col-12'>
                {ItemDetail(1534532639,87657406)}
            </div>
            
        </div>
    );
}

export default CardiganCompare;
