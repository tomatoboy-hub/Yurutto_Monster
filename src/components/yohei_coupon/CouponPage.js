import React from 'react';
import { Grid } from '@mui/material';
import CouponCard from './CouponCard';
import defaultCouponImage from "../../images/coupon.png";

// 仮のクーポンデータ配列
// ここでは、image プロパティと title プロパティを持つオブジェクトの配列を想定しています。
const coupons = [
  { id: 1, title: '無料入浴券', defaultCouponImage },
  { id: 2, title: '無料入浴券', defaultCouponImage },
  { id: 3, title: '無料入浴券', defaultCouponImage },
  // その他のクーポンデータ...
];

const CouponPage = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '10px' }}>
      {coupons.map((coupon) => (
        <Grid item key={coupon.id} xs={12} sm={6} md={4}>
          <CouponCard
            image={coupon.image}
            title={coupon.title}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CouponPage;
