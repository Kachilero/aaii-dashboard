import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

/**
 * Outputs a card component
 * @typedef {Object} ValueProps
 * @property {String} itemName
 * @property {String} itemAbbreviation
 * @property {String} url
 * @property {String} alt
 *
 * @typedef {Object} Props
 * @property {Boolean} showIcon
 * @property {String} headerTitle
 * @property {String|Null} headerSubHeader
 * @property {String} cardTitle
 * @property {String} description
 * @property {Array<ValueProps>} values
 * @property {String} footerCta
 * @property {Array<Number>|null} extraInfo
 *
 * */
const CardWrapper = props => {
  const {
    showIcon,
    headerTitle,
    headerSubHeader,
    cardTitle,
    description,
    values,
    footerCta,
    extraInfo
  } = props;
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={showIcon ? <Star sx={{ fill: "black" }} aria-label='stocks' /> : null}
        title={headerTitle}
        subheader={headerSubHeader !== null ? headerSubHeader : null}
      />
      
      <CardContent>
        <Typography variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <CardActions>
          <Button
            color='primary'
            href="#"
            fullWidth={true}
            size="large"
          >{footerCta}</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardWrapper;
