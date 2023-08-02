import React from "react";
import {addNetwork} from "@site/src/utils";
import {Button} from "@mui/material";

export default function AddMetamaskNetwork(props: {
    network: 'testnet' | 'mainnet' | 'devnet',
    title: string,
    size: 'small' | 'medium' | 'large'
}): JSX.Element {
    return (
        <Button
            variant="contained"
            color={'secondary'}
            onClick={() => addNetwork(props.network)}
            size={props.size}>{props.title}
        </Button>
    )
}
