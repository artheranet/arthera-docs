import React from "react";
import Link from "@docusaurus/Link";
import {addNetwork} from "@site/src/utils";

export default function AddMetamaskNetwork(props: {network: 'testnet' | 'mainnet', title: string}): JSX.Element {
    return (
        <Link onClick={() => addNetwork(props.network)} href={'#'}>{props.title}</Link>
    )
}
