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

function JeansCompare() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-12'>
                {ItemDetail(9308149460,309959293)}
            </div>
            <div className='col-12'>
                {ItemDetail(3964945162,106712159)}
            </div>
            <div className='col-12'>
                {ItemDetail(7753912822,309959293)}
            </div>
            </div>
        </div>
    );
}

export default JeansCompare;
