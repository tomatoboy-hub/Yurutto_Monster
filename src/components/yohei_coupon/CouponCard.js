import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, CardActions } from '@mui/material';
import defaultCouponImage from "../../images/coupon.png"; // インポートした画像の変数名を変更

const CouponCard = ({ image, title }) => { // プロップの名前を 'couponImage' から 'image' に変更
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500, mt: '10px', ml: '20px'}}>
      <CardMedia
        component="img"
        height="330"
        image={image || defaultCouponImage} // プロップの 'image' がない場合にデフォルト画像を使用
        alt="coupon image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          有効期限: 2024年6月
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center'}}>
        <Button size="small" sx={{fontWeight: 'bold'}}>
            利用する
        </Button>
      </CardActions>
    </Card>
  );
};

export default CouponCard;
