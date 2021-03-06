import React from 'react';

import BuildControl from './BuildControl/BuildControl'


import styles from './BuildControls.module.css'

const controls = [
  {label: "Lettuce", type: 'lettuce'},
  {label: "Bacon", type: 'bacon'},
  {label: "Cheese", type: 'cheese'},
  {label: "Meat", type: 'meat'},
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.buyable}
      onClick={props.ordered}>{props.isAuth ? 'ORDER THIS BURGER' : 'SIGN IN'}</button>
  </div>
);

export default buildControls;