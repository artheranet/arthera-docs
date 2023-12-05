import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import AddMetamaskNetwork from "@site/src/components/AddMetamaskNetwork";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <p>
          This documentation will help you migrate, develop applications for the Arthera blockchain, run nodes, adapt your business model and participate in the first sustainable WEB3 ecosystem.
          Here you will find descriptive concepts, how-to guides, tutorials, API references, code examples, release notes, and more.
        </p>
      </div>

      <div className={styles.feature}>
        <h1>Arthera testnet is live</h1>
        <p>You can check it out using the <Link href="https://explorer-test.arthera.net">Explorer</Link></p>
        <AddMetamaskNetwork network={'testnet'} title={'Add Arthera Testnet to Metamask'} size={'medium'}/>
      </div>

      <div className={styles.feature}>
        <h1>Arthera Wallet</h1>
        <p>It’s right here. Use it to play around with our subscriptions and to check out our partner dApps, for now.</p>
        <ul>
          <li><Link href="/learn/arthera-wallet">Here is a detailed guide</Link></li>
        </ul>
      </div>

      <div className={styles.feature}>
          <h1>Arthera Explorer</h1>
          <p>Use it to explore the Arthera blockchain: blocks, transactions, tokens, addresses, smart contracts and more.</p>
          <ul>
            <li><Link href="https://explorer-test.arthera.net">Arthera Explorer</Link></li>
            <li><Link href="https://explorer-test-api.arthera.net">Arthera Explorer API</Link></li>
          </ul>
      </div>

      <div className={styles.feature}>
        <h1>Get started</h1>
      </div>

      <div className={styles.feature}>
        <div className={styles.cardContainer}>
          <div className="row">
            <div className={clsx('col col--4')}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <Link className={styles.cardTitle} href="/learn/intro"><h2>Learn everything about Arthera</h2></Link>
                  <p className={styles.cardText}>Learn the key concepts of the Arthera Protocol, like subscriptions, transactions, accounts, gas and transaction fees, nodes, and more</p>
                </div>
              </div>
            </div>

            <div className={clsx('col col--4')}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <Link className={styles.cardTitle} href="/build/intro"><h2>Develop or Migrate your contracts</h2></Link>
                  <p className={styles.cardText}>Everything you need to know about building and deploying contracts on the Arthera blockchain</p>
                </div>
              </div>
            </div>

              <div className={clsx('col col--4')}>
                  <div className={styles.card}>
                      <div className={styles.cardBody}>
                          <Link className={styles.cardTitle} href="/smp/intro"><h2>Start a Web 3.0 SaaS business</h2></Link>
                          <p className={styles.cardText}>Transform your Web3 dApp into a SaaS offering with Arthera SMP. Simplify and enhance your billing, payment, invoicing, and subscription management operations</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h1>Become a Validator</h1>
        <p>Install and run a validator node on your local testnet. <Link href="https://forms.gle/THL21KgiktVWikjf9">Join as a validator.</Link></p>
      </div>

      <div className={styles.feature}>
        <h1>Join the Arthera ecosystem</h1>
        <p>In order to properly organise your onboarding please <Link href="https://forms.gle/dKQsUK3L7JW8dN4Y6">complete this form</Link>. The more accurate your answers are, the better we can settle you in. You can also check out <Link href="https://drive.google.com/file/d/1Y82EWqNcFdCjAW0iLs_SURP1LykO5lak/view?usp=sharing">this deck</Link> to get more information about building on Arthera.</p>
      </div>

      <div className={styles.feature}>
        <h1>Find out more</h1>
        <p>Find out more about us and exchange ideas by joining the <Link href="https://t.me/artherachain">Telegram group</Link> or by following our <Link href="https://t.me/artherachain">Telegram group</Link> if you need tech support.</p>
      </div>
    </section>
  );
}
